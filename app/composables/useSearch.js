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

export function useSearch(searchData, searchInputDom) {
  const searchContent = ref('')
  const searchType = ref('bing')
  const isEngineListVisible = ref(false)

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

  const handleSearch = () => {
    const searchString = searchContent.value
    if (searchString.trim().length === 0) return

    const searchStringList = readSearchHistory()
    const idx = searchStringList.indexOf(searchString)
    if (idx !== -1) searchStringList.splice(idx, 1)
    searchStringList.unshift(searchString)
    if (searchStringList.length > 50) searchStringList.pop()
    window.localStorage.setItem('searchStringList', JSON.stringify(searchStringList))

    const targetUrl = currentSearchEngine.value.href + encodeURIComponent(searchString)
    if (searchData.searchResultIsBlank) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = targetUrl
    }
    searchContent.value = ''
  }

  const selectSearchEngine = (name) => {
    searchType.value = name
    isEngineListVisible.value = false
    window.localStorage.setItem('searchType', name)
  }

  const toggleEngineList = () => {
    isEngineListVisible.value = !isEngineListVisible.value
  }

  onMounted(() => {
    const saved = window.localStorage.getItem('searchType')
    if (saved !== null) {
      searchType.value = saved
    }
    nextTick(() => {
      searchInputDom.value?.focus()
    })
  })

  return {
    searchContent,
    searchType,
    isEngineListVisible,
    currentSearchEngine,
    handleSearch,
    selectSearchEngine,
    toggleEngineList,
  }
}
