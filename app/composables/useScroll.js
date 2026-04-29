export function useScroll(containerRef) {
  const showBackToTop = ref(false)

  const toggleScroll = () => {
    if (!containerRef.value) return
    if (showBackToTop.value) {
      showBackToTop.value = false
      containerRef.value.scrollTop = 0
    } else {
      showBackToTop.value = true
      containerRef.value.scrollTop = containerRef.value.scrollHeight
    }
  }

  const handleScroll = () => {
    if (containerRef.value) {
      showBackToTop.value = containerRef.value.scrollTop > 0
    }
  }

  return { showBackToTop, toggleScroll, handleScroll }
}
