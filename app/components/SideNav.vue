<script>
export default {
  props: {
    websiteData: { type: Array, required: true }
  }
}
</script>

<template>
  <nav id="aside-box">
    <div class="nav-header">分类导航</div>
    <ul>
      <li v-for="(item, index) in websiteData" :key="index">
        <a :href="`#${item.category}`" :title="item.category" class="nav-link">
          <span class="nav-icon">
            <img :src="item.iconSvg" :alt="item.category">
          </span>
          <span class="nav-label">{{ item.category }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="less" scoped>
#aside-box {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.nav-header {
  padding: 0 20px 16px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

ul {
  width: 100%;
  padding: 0 10px;

  li {
    width: 100%;
    margin-bottom: 2px;
  }
}

.nav-link {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border-radius: 8px;
  text-decoration: none;
  transition: all var(--transition-fast);
  border-left: 3px solid transparent;
  color: var(--text-secondary);

  .nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: var(--bg-tertiary);
    transition: all var(--transition-fast);
    flex-shrink: 0;

    img {
      width: 18px;
      height: 18px;
    }
  }

  .nav-label {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background: var(--bg-hover);
    color: var(--text-primary);

    .nav-icon {
      background: var(--accent-light);
    }
  }

  &:active {
    border-left-color: var(--accent);
    background: var(--accent-light);
    color: var(--accent);

    .nav-icon {
      background: var(--accent);
    }
  }
}
</style>
