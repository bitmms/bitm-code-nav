export function useTheme(mainBoxRef) {
  const currentTheme = ref('light')
  const isTransitioning = ref(false)
  const transitionOrigin = ref({ x: 0, y: 0 })

  const toggleTheme = (event) => {
    if (isTransitioning.value) return

    const target = currentTheme.value === 'light' ? 'dark' : 'light'

    transitionOrigin.value = {
      x: event?.clientX ?? window.innerWidth / 2,
      y: event?.clientY ?? window.innerHeight / 2
    }
    isTransitioning.value = true

    setTimeout(() => {
      currentTheme.value = target
      isTransitioning.value = false
    }, 400)
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

  return { currentTheme, toggleTheme, isTransitioning, transitionOrigin }
}
