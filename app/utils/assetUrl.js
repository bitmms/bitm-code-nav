const modules = import.meta.glob('../assets/svg/**/*.{svg,png,jpg,jpeg,gif,webp}', { eager: true, query: '?url' })

const assetUrlMap = {}
for (const [key, mod] of Object.entries(modules)) {
  const normalized = key.replace('../assets/', '')
  assetUrlMap[normalized] = mod.default
}

export function getAssetUrl(path) {
  return assetUrlMap[path] || path
}
