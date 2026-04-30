<script>
export default {
  props: {
    categoryItem: { type: Object, required: true }
  }
}
</script>

<template>
  <section class="category-section">
    <div :id="categoryItem.category" class="section-header">
      <span class="section-icon">
        <img :src="categoryItem.iconSvg" :alt="categoryItem.category">
      </span>
      <h2 class="section-title">{{ categoryItem.category }}</h2>
      <span class="section-count">{{ categoryItem.children.length }} 个</span>
    </div>

    <div class="section-body">
      <ul class="card-grid">
        <WebsiteCard
          v-for="(websiteItem, websiteIndex) in categoryItem.children"
          :key="websiteIndex"
          :website-item="websiteItem"
        />
      </ul>
    </div>
  </section>
</template>

<style lang="less" scoped>
.category-section {
  width: 100%;
  margin-top: 48px;

  &:first-child {
    margin-top: 0;
  }
}

.section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 16px;
  margin-bottom: 4px;
}

.section-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--accent-light);
  flex-shrink: 0;

  img {
    width: 22px;
    height: 22px;
    filter: var(--icon-filter);
  }
}

.section-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.3px;
}

.section-count {
  font-size: 12px;
  color: var(--text-tertiary);
  background: var(--bg-tertiary);
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 500;
}

.section-body {
  width: 100%;
}

.card-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 18px;
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
