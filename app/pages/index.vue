<script>
import { websiteConfigData, searchConfigData } from '~/data/WebSiteData'
import { getTopSites } from '~/composables/useClickTracker'

export default {
  setup() {
    const websiteData = websiteConfigData
    const searchData = searchConfigData
    const topSites = ref([])

    onMounted(() => {
      topSites.value = getTopSites(websiteData, 6)
    })

    const refreshTopSites = () => {
      topSites.value = getTopSites(websiteData, 6)
    }

    return { websiteData, searchData, topSites, refreshTopSites }
  }
}
</script>

<template>
  <div class="search-section">
    <SearchBar :search-data="searchData" />
  </div>
  <div v-if="topSites.length > 0" class="hot-section">
    <div class="hot-header">
      <h2 class="hot-title">热门网站</h2>
      <span class="hot-sub">根据访问次数排序</span>
    </div>
    <ul class="hot-grid">
      <WebsiteCard
        v-for="(item, idx) in topSites"
        :key="item.href"
        :website-item="item"
        @tracked="refreshTopSites"
      />
    </ul>
  </div>
  <div class="page-content">
    <CategorySection
      v-for="(categoryItem, categoryIndex) in websiteData"
      :key="categoryIndex"
      :category-item="categoryItem"
    />
  </div>
  <footer class="page-footer">
    <div class="footer-line"></div>
    <span>由 <a href="https://docs.github.com/en/pages" target="_blank" rel="noopener noreferrer">GitHub Pages</a> 提供部署 · 双比特导航</span>
  </footer>
</template>

<style lang="less" scoped>
.search-section {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 32px 24px 0;
}

.hot-section {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 28px 24px 0;
}

.hot-header {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding-bottom: 12px;
}

.hot-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
}

.hot-sub {
  font-size: 12px;
  color: var(--text-tertiary);
}

.hot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 14px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.page-content {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px 24px 48px;
}

.page-footer {
  width: 100%;
  padding: 24px 24px 32px;
  text-align: center;

  .footer-line {
    width: 40px;
    height: 2px;
    background: var(--border-color);
    margin: 0 auto 16px;
    border-radius: 1px;
  }

  span {
    font-size: 12px;
    color: var(--text-tertiary);

    a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color var(--transition-fast);

      &:hover {
        color: var(--accent);
      }
    }
  }
}
</style>
