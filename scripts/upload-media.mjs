#!/usr/bin/env node
/**
 * Upload one media file to the NexPhone R2 bucket under blog/<slug>/ and print its public URL.
 *
 * Big media (hero images, GIFs, video, audio) must NOT live in git — this repo stays lean and reviewable;
 * R2 serves them with zero egress fees. Small screenshots (≤ ~300 KB) belong in images/<slug>/ instead.
 *
 * Usage:
 *   # one-time: pull the credentials from the nexphone Railway service and export them
 *   #   railway variables -s nexphone --kv | grep R2_
 *   node scripts/upload-media.mjs ./demo.mp4 my-post-slug
 *
 * Prints:  https://<R2_PUBLIC_URL>/blog/my-post-slug/demo.mp4   ← paste into the post
 */

import { readFileSync } from 'node:fs'
import { basename, extname } from 'node:path'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const [, , filePath, slug] = process.argv
if (!filePath || !slug) {
  console.error('Usage: node scripts/upload-media.mjs <file> <post-slug>')
  process.exit(1)
}

const need = (name) => {
  const v = process.env[name]
  if (!v) {
    console.error(`Missing ${name} — run: railway variables -s nexphone --kv | grep R2_  and export them.`)
    process.exit(1)
  }
  return v
}

const accountId = need('R2_ACCOUNT_ID')
const bucket = need('R2_BUCKET_NAME')
const publicBase = need('R2_PUBLIC_URL').replace(/\/$/, '')

const TYPES = {
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
  '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4', '.webm': 'video/webm',
  '.mp3': 'audio/mpeg', '.m4a': 'audio/mp4', '.wav': 'audio/wav',
}
const ext = extname(filePath).toLowerCase()
const contentType = TYPES[ext]
if (!contentType) {
  console.error(`Unsupported type "${ext}" — supported: ${Object.keys(TYPES).join(' ')}`)
  process.exit(1)
}

// Keep filenames URL-safe — they become permanent public URLs.
const safeName = basename(filePath).toLowerCase().replace(/[^a-z0-9._-]+/g, '-')
const key = `blog/${slug}/${safeName}`

const client = new S3Client({
  region: 'auto',
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: need('R2_ACCESS_KEY_ID'),
    secretAccessKey: need('R2_SECRET_ACCESS_KEY'),
  },
  // R2 rejects the AWS SDK's newer default checksum/streaming-trailer headers with a bare AccessDenied
  // (hit live on the first upload). WHEN_REQUIRED restores the classic behavior R2 speaks.
  requestChecksumCalculation: 'WHEN_REQUIRED',
  responseChecksumValidation: 'WHEN_REQUIRED',
})

// A whole-file Buffer, not a stream: R2 also dislikes the SDK's streaming trailers, and blog media is
// megabytes at most — memory is not the constraint here, compatibility is.
const body = readFileSync(filePath)
await client.send(new PutObjectCommand({
  Bucket: bucket,
  Key: key,
  Body: body,
  ContentType: contentType,
  ContentLength: body.length,
  // A year of immutable caching: media URLs are content-addressed by convention (new file = new name).
  CacheControl: 'public, max-age=31536000, immutable',
}))

console.log(`Uploaded ${(body.length / 1024).toFixed(0)} KB → ${publicBase}/${key}`)
