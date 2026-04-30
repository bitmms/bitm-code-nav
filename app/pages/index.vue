<script>
import { websiteConfigData, searchConfigData } from '~/data/WebSiteData'

export default {
  setup() {
    const websiteData = websiteConfigData
    const searchData = searchConfigData
    return { websiteData, searchData }
  }
}
</script>

<template>
  <div class="search-section">
    <SearchBar :search-data="searchData" />
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
