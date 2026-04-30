<script>
export default {
  props: {
    searchData: { type: Object, required: true }
  },

  setup(props) {
    const searchInputDom = ref(null)
    const searchWrapperDom = ref(null)
    const {
      searchContent,
      isEngineListVisible,
      highlightedIndex,
      currentSearchEngine,
      suggestions,
      isSuggestionVisible,
      handleSearch,
      selectSuggestion,
      onInputKeydown,
      dismissSuggestions,
      selectSearchEngine,
      toggleEngineList,
    } = useSearch(props.searchData, searchInputDom, searchWrapperDom)

    const highlightMatch = (text) => {
      const query = searchContent.value.trim()
      if (!query) return text
      const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
      return text.replace(regex, '<mark>$1</mark>')
    }

    return {
      searchInputDom,
      searchWrapperDom,
      searchContent,
      isEngineListVisible,
      highlightedIndex,
      currentSearchEngine,
      suggestions,
      isSuggestionVisible,
      handleSearch,
      selectSuggestion,
      onInputKeydown,
      dismissSuggestions,
      selectSearchEngine,
      toggleEngineList,
      highlightMatch,
    }
  }
}
</script>

<template>
  <div class="search-wrapper" ref="searchWrapperDom">
    <div class="search-bar">
      <button class="search-engine-btn" @click="toggleEngineList" :title="currentSearchEngine.desc" :aria-label="'当前搜索引擎：' + currentSearchEngine.desc + '，点击切换'">
        <img :src="currentSearchEngine.logo" :alt="currentSearchEngine.name">
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      <input
        ref="searchInputDom"
        v-model="searchContent"
        type="text"
        class="search-input"
        placeholder="搜索你想要的网站..."
        @keydown="onInputKeydown"
        @blur="dismissSuggestions"
      >
      <button class="search-btn" @click="handleSearch()" title="搜索">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>
    </div>

    <div v-show="isSuggestionVisible" class="suggestion-dropdown">
      <div class="suggestion-header">搜索历史</div>
      <div
        v-for="(item, index) in suggestions"
        :key="item"
        class="suggestion-item"
        :class="{ highlighted: index === highlightedIndex }"
        @mousedown.prevent="selectSuggestion(index)"
        @mouseenter="highlightedIndex = index"
      >
        <svg class="suggestion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <span class="suggestion-text" v-html="highlightMatch(item)"></span>
      </div>
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
  max-width: 720px;
  margin: 0 auto;
  padding: 0;
}

.search-bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
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
  border: none;
  border-right: 1px solid var(--border-color);
  background: transparent;
  color: inherit;
  font: inherit;
  transition: background var(--transition-fast);
  flex-shrink: 0;

  &:hover {
    background: var(--bg-hover);
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 6px;
  }

  .chevron {
    width: 16px;
    height: 16px;
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
  font-size: 16px;
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
    width: 22px;
    height: 22px;
  }

  &:hover {
    color: var(--accent);
    background: var(--bg-hover);
  }
}

// =========== 搜索建议下拉 ===========
.suggestion-dropdown {
  position: absolute;
  top: calc(56px + 4px);
  left: 0;
  right: 0;
  z-index: 101;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  padding: 6px;
  overflow: hidden;
}

.suggestion-header {
  padding: 8px 14px 4px;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.suggestion-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: all var(--transition-fast);

  &.highlighted {
    background: var(--accent-light);

    .suggestion-text {
      color: var(--accent);
    }

    .suggestion-icon {
      color: var(--accent);
    }
  }

  .suggestion-icon {
    width: 16px;
    height: 16px;
    color: var(--text-tertiary);
    flex-shrink: 0;
  }

  .suggestion-text {
    font-size: 14px;
    color: var(--text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    :deep(mark) {
      background: transparent;
      color: var(--accent);
      font-weight: 600;
    }
  }
}

// =========== 搜索引擎下拉 ===========
.engine-dropdown {
  position: absolute;
  top: calc(56px + 6px);
  left: 0;
  right: 0;
  z-index: 101;
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
    width: 32px;
    height: 32px;
    border-radius: 6px;
    flex-shrink: 0;
  }

  span {
    font-size: 14px;
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
