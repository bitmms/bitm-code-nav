export function useTheme(mainBoxRef) {
  const currentTheme = ref('light')

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
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

  return { currentTheme, toggleTheme }
}
