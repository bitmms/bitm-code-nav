export function useTheme(mainBoxRef) {
  const currentTheme = ref('light')
  const isTransitioning = ref(false)
  const isShrinking = ref(false)
  const transitionOrigin = ref({ x: 0, y: 0 })
  const transitionOldTheme = ref('')

  const toggleTheme = (event) => {
    if (isTransitioning.value) return

    const target = currentTheme.value === 'light' ? 'dark' : 'light'
    transitionOldTheme.value = currentTheme.value

    const btn = event?.currentTarget
    if (btn) {
      const rect = btn.getBoundingClientRect()
      transitionOrigin.value = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      }
    } else {
      transitionOrigin.value = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      }
    }

    isTransitioning.value = true
    isShrinking.value = false
    currentTheme.value = target

    nextTick(() => {
      requestAnimationFrame(() => {
        isShrinking.value = true
      })
    })

    setTimeout(() => {
      isTransitioning.value = false
      isShrinking.value = false
    }, 280)
  }

  watch(currentTheme, (theme) => {
    if (mainBoxRef.value) {
      mainBoxRef.value.classList.add(theme)
      mainBoxRef.value.classList.remove(theme === 'light' ? 'dark' : 'light')
    }
    if (import.meta.client) {
      window.localStorage.setItem('nowThemeType', theme)
    }
  })

  onMounted(() => {
    const saved = window.localStorage.getItem('nowThemeType')
    if (saved === 'dark' || saved === 'light') {
      currentTheme.value = saved
    }
  })

  return { currentTheme, toggleTheme, isTransitioning, isShrinking, transitionOrigin, transitionOldTheme }
}
