<script>
import { websiteConfigData, searchConfigData } from '~/data/WebSiteData'

export default {
  setup() {
    const websiteData = ref(websiteConfigData)
    const searchData = ref(searchConfigData)
    return { websiteData, searchData }
  }
}
</script>

<template>
  <SearchBar :search-data="searchData" />
  <div class="page-content">
    <CategorySection
      v-for="(categoryItem, categoryIndex) in websiteData"
      :key="categoryIndex"
      :category-item="categoryItem"
    />
  </div>
  <footer class="page-footer">
    <div class="footer-line"></div>
    <span>由 <a href="https://docs.github.com/en/pages" target="_blank">GitHub Pages</a> 提供部署 · 双比特导航</span>
  </footer>
</template>

<style lang="less" scoped>
.page-content {
  width: 100%;
  padding: 8px 3% 40px;
}

.page-footer {
  width: 100%;
  padding: 24px 3%;
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
