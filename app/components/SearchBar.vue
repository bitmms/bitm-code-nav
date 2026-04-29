<script>
export default {
  props: {
    searchData: { type: Object, required: true }
  },

  setup(props) {
    const searchInputDom = ref(null)
    const {
      searchContent,
      isEngineListVisible,
      currentSearchEngine,
      handleSearch,
      selectSearchEngine,
      toggleEngineList,
    } = useSearch(props.searchData, searchInputDom)

    return {
      searchInputDom,
      searchContent,
      isEngineListVisible,
      currentSearchEngine,
      handleSearch,
      selectSearchEngine,
      toggleEngineList,
    }
  }
}
</script>

<template>
  <div class="search-wrapper">
    <div class="search-bar">
      <div class="search-engine-btn" @click="toggleEngineList" :title="currentSearchEngine.desc">
        <img :src="currentSearchEngine.logo" :alt="currentSearchEngine.name">
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      <input
        ref="searchInputDom"
        v-model="searchContent"
        type="text"
        class="search-input"
        placeholder="搜索你想要的网站..."
        @keydown.enter="handleSearch"
        @focus="isEngineListVisible = false"
      >
      <button class="search-btn" @click="handleSearch" title="搜索">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>
    </div>

    <div v-show="isEngineListVisible" class="engine-dropdown">
      <div
        v-for="item in searchData.list"
        :key="item.name"
        class="engine-item"
        :class="{ active: item.name === currentSearchEngine.name }"
        :title="item.desc"
        @click="selectSearchEngine(item.name)"
      >
        <img :src="item.logo" :alt="item.name">
        <span>{{ item.desc }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-wrapper {
  position: relative;
  width: 100%;
  padding: 24px 3% 0;
}

.search-bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  background: var(--search-bg);
  border-radius: var(--search-radius);
  border: 2px solid transparent;
  transition: all var(--transition-fast);
  overflow: hidden;

  &:focus-within {
    background: var(--search-focus-bg);
    border-color: var(--accent);
    box-shadow: 0 0 0 4px var(--accent-light);
  }
}

.search-engine-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 100%;
  padding: 0 14px;
  cursor: pointer;
  border-right: 1px solid var(--border-color);
  transition: background var(--transition-fast);
  flex-shrink: 0;

  &:hover {
    background: var(--bg-hover);
  }

  img {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    filter: var(--icon-filter);
  }

  .chevron {
    width: 14px;
    height: 14px;
    color: var(--text-tertiary);
  }
}

.search-input {
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-primary);
  font-size: 15px;
  padding: 0 16px;
  font-family: inherit;

  &::placeholder {
    color: var(--text-tertiary);
  }
}

.search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 100%;
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  cursor: pointer;
  transition: all var(--transition-fast);
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: var(--accent);
    background: var(--bg-hover);
  }
}

.engine-dropdown {
  position: absolute;
  top: calc(52px + 24px + 6px);
  left: 3%;
  right: 3%;
  z-index: 99;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 2px;
  padding: 8px;
  max-height: 320px;
  overflow-y: auto;
}

.engine-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all var(--transition-fast);

  img {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    flex-shrink: 0;
  }

  span {
    font-size: 13px;
    color: var(--text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background: var(--bg-hover);
  }

  &.active {
    background: var(--accent-light);
    span { color: var(--accent); }
  }
}
</style>
