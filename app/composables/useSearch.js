function readSearchHistory() {
  const raw = window.localStorage.getItem('searchStringList')
  if (raw === null) return []
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function useSearch(searchData, searchInputDom, searchWrapperDom) {
  const searchContent = ref('')
  const searchType = ref('bing')
  const isEngineListVisible = ref(false)
  const highlightedIndex = ref(-1)

  const currentSearchEngine = computed(() => {
    let engine = {
      name: searchType.value,
      href: 'https://cn.bing.com/search?ensearch=0&q=',
      logo: 'svg/search/search-bing.svg',
      desc: '必应搜索',
    }
    for (const item of searchData.list) {
      if (item.name === searchType.value) {
        engine = item
        break
      }
    }
    return engine
  })

  const suggestions = computed(() => {
    const val = searchContent.value.trim()
    if (val === '') return []
    const history = readSearchHistory()
    const result = []
    for (const item of history) {
      if (item.toLowerCase().includes(val.toLowerCase()) && item !== val) {
        result.push(item)
      }
      if (result.length >= 8) break
    }
    return result
  })

  const isSuggestionVisible = computed(() => {
    return suggestions.value.length > 0 && !isEngineListVisible.value
  })

  const handleSearch = (query) => {
    const searchString = (query || searchContent.value).trim()
    if (searchString.length === 0) return

    const searchStringList = readSearchHistory()
    const idx = searchStringList.indexOf(searchString)
    if (idx !== -1) searchStringList.splice(idx, 1)
    searchStringList.unshift(searchString)
    if (searchStringList.length > searchData.searchHistoryLimit) searchStringList.pop()
    window.localStorage.setItem('searchStringList', JSON.stringify(searchStringList))

    const targetUrl = currentSearchEngine.value.href + encodeURIComponent(searchString)
    if (searchData.searchResultIsBlank) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = targetUrl
    }
    searchContent.value = ''
    highlightedIndex.value = -1
  }

  const selectSuggestion = (index) => {
    if (index >= 0 && index < suggestions.value.length) {
      searchContent.value = suggestions.value[index]
      highlightedIndex.value = -1
      nextTick(() => {
        handleSearch()
      })
    }
  }

  const onInputKeydown = (e) => {
    if (isEngineListVisible.value) return

    const len = suggestions.value.length
    if (len === 0) {
      if (e.key === 'Enter') {
        e.preventDefault()
        handleSearch()
      }
      return
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        highlightedIndex.value = highlightedIndex.value < len - 1 ? highlightedIndex.value + 1 : 0
        break
      case 'ArrowUp':
        e.preventDefault()
        highlightedIndex.value = highlightedIndex.value > 0 ? highlightedIndex.value - 1 : len - 1
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex.value >= 0) {
          selectSuggestion(highlightedIndex.value)
        } else {
          handleSearch()
        }
        break
      case 'Escape':
        highlightedIndex.value = -1
        searchInputDom.value?.blur()
        break
    }
  }

  const dismissSuggestions = () => {
    highlightedIndex.value = -1
  }

  const selectSearchEngine = (name) => {
    searchType.value = name
    isEngineListVisible.value = false
    window.localStorage.setItem('searchType', name)
  }

  const toggleEngineList = () => {
    isEngineListVisible.value = !isEngineListVisible.value
    highlightedIndex.value = -1
  }

  const closeAllDropdowns = (e) => {
    if (searchWrapperDom.value && !searchWrapperDom.value.contains(e.target)) {
      isEngineListVisible.value = false
      dismissSuggestions()
    }
  }

  watch([isSuggestionVisible, isEngineListVisible], () => {
    if (isSuggestionVisible.value || isEngineListVisible.value) {
      document.addEventListener('mousedown', closeAllDropdowns)
    } else {
      document.removeEventListener('mousedown', closeAllDropdowns)
    }
  })

  onMounted(() => {
    const saved = window.localStorage.getItem('searchType')
    if (saved !== null) {
      searchType.value = saved
    }
    nextTick(() => {
      searchInputDom.value?.focus()
    })
  })

  onUnmounted(() => {
    document.removeEventListener('mousedown', closeAllDropdowns)
  })

  return {
    searchContent,
    searchType,
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
  }
}
