/**
 * Serve Contentful assets as resized WebP via the Images API.
 * Contentful supports on-the-fly transforms through query params, so we can
 * request a right-sized, modern-format image instead of the full-res original.
 *
 * Usage: ctfImage(post.banner.url, 1200)
 */
export const ctfImage = (url, width, quality = 75) => {
  if (!url) return url
  const base = url.startsWith('//') ? `https:${url}` : url
  const sep = base.includes('?') ? '&' : '?'
  return `${base}${sep}fm=webp&w=${width}&q=${quality}`
}
