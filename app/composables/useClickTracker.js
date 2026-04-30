const STORAGE_KEY = 'siteClickCounts'

function readClickCounts() {
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) return {}
  try { return JSON.parse(raw) } catch { return {} }
}

export function recordClick(href) {
  const counts = readClickCounts()
  counts[href] = (counts[href] || 0) + 1
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(counts))
}

export function getTopSites(websiteData, limit = 6) {
  const counts = readClickCounts()
  const allSites = []
  for (const category of websiteData) {
    for (const site of category.children) {
      const clicks = counts[site.href] || 0
      if (clicks > 0) {
        allSites.push({ ...site, clicks })
      }
    }
  }
  return allSites.sort((a, b) => b.clicks - a.clicks).slice(0, limit)
}
