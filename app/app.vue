<script>
import { websiteConfigData } from '~/data/WebSiteData'
import { getAssetUrl } from '~/utils/assetUrl'

export default {
  setup() {
    const websiteData = ref(websiteConfigData)
    const mainBoxRef = ref(null)
    const contentRef = ref(null)
    const { currentTheme, toggleTheme, isTransitioning, isShrinking, transitionOrigin, transitionOldTheme } = useTheme(mainBoxRef)
    const { showBackToTop, toggleScroll, handleScroll } = useScroll(contentRef)

    return {
      websiteData,
      mainBoxRef,
      contentRef,
      currentTheme,
      toggleTheme,
      isTransitioning,
      isShrinking,
      transitionOrigin,
      transitionOldTheme,
      showBackToTop,
      toggleScroll,
      handleScroll,
      getAssetUrl,
    }
  }
}
</script>

<template>
  <div id="container" ref="mainBoxRef">
    <header id="container-header">
      <div id="header-logo">
        <div id="logo-box">
          <NuxtLink to="/" class="logo-link" title="双比特 - 程序员导航站" aria-label="返回首页" rel="home">
            <img
              class="logo-img logo-img1"
              :src="getAssetUrl('svg/logo/logo.svg')"
              alt="双比特 - 程序员导航站"
              loading="eager">
            <img
              class="logo-img logo-img2"
              :src="getAssetUrl('svg/logo/logo2.svg')"
              alt="双比特 - 程序员导航站"
              loading="eager">
          </NuxtLink>
        </div>
      </div>
      <div id="header-content">
        <div class="nav-box"/>
        <div class="tool-of-dark-and-light" @click="toggleTheme($event)" :title="currentTheme === 'light' ? '切换暗色模式' : '切换亮色模式'">
          <svg v-show="currentTheme === 'dark'" class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg v-show="currentTheme === 'light'" class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </div>
      </div>
    </header>
    <div id="container-content">
      <div id="content-aside">
        <SideNav :website-data="websiteData" />
      </div>
      <div id="content-main" ref="contentRef" @scroll.capture="handleScroll">
        <NuxtPage />
      </div>
    </div>
    <div id="container-tool">
      <div class="tool-item-box" @click="toggleScroll" :title="showBackToTop ? '返回顶部' : '滚动到底部'">
        <svg v-show="showBackToTop" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
        <svg v-show="!showBackToTop" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      <div class="tool-item-box" @click="toggleTheme($event)" :title="currentTheme === 'light' ? '切换暗色模式' : '切换亮色模式'">
        <svg v-show="currentTheme === 'dark'" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
        <svg v-show="currentTheme === 'light'" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </div>
    </div>
  </div>
  <div
    v-if="isTransitioning"
    class="theme-transition-overlay"
    :class="[transitionOldTheme === 'light' ? 'from-light' : 'from-dark', { shrink: isShrinking }]"
    :style="{ '--ox': transitionOrigin.x + 'px', '--oy': transitionOrigin.y + 'px' }"
  />
</template>

<style lang="less" scoped>
// =========== 基础变量（亮色兜底，防首屏黑闪） ===========
#container {
  --transition-time: .3s;
  --transition-fast: .15s;
  --logo-width: 220px;
  --aside-width: 220px;
  --header-height: 70px;
  --header-bottom-border: 1px;
  --content-grid: 1fr 1fr 1fr 1fr;
  --card-radius: 12px;
  --search-radius: 16px;
  --font-family: 'HarmonyOS Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --bg-primary: #f0f2f5;
  --bg-secondary: #ffffff;
  --bg-tertiary: #f7f8fa;
  --bg-hover: #e8ecf1;
  --bg-card: rgba(255, 255, 255, 0.72);
  --bg-toolbar: rgba(255, 255, 255, 0.85);
  --text-primary: #1a1a2e;
  --text-secondary: #6b7280;
  --text-tertiary: #9ca3af;
  --border-color: #e5e7eb;
  --border-light: #f0f0f0;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.08);
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.04);
  --accent: #5b9cf5;
  --accent-light: #eff6ff;
  --accent-hover: #3b82f6;
  --search-bg: #dde1e7;
  --search-focus-bg: #ffffff;
  --scrollbar-thumb: #c4c9d0;
  --scrollbar-track: transparent;
  --icon-filter: none;

  // 布局
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg-image, var(--bg-primary, #f0f2f5));
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;

  * {
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
  }
}

// =========== 亮色主题（仅定义暗色不存在的变量） ===========
#container.light {
  --bg-image: url('~/assets/img/bg.png');
}

// =========== 暗色主题 ===========
#container.dark {
  --bg-primary: #0f1117;
  --bg-secondary: #161822;
  --bg-tertiary: #1c1f2e;
  --bg-hover: #232738;
  --bg-card: rgba(22, 24, 34, 0.75);
  --bg-toolbar: rgba(22, 24, 34, 0.9);
  --text-primary: #e8e8ed;
  --text-secondary: #8b8fa3;
  --text-tertiary: #5c6072;
  --border-color: #2a2d3a;
  --border-light: #222533;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.4);
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15);
  --accent: #60a5fa;
  --accent-light: #1e293b;
  --accent-hover: #93c5fd;
  --search-bg: #232738;
  --search-focus-bg: #2a2d3a;
  --scrollbar-thumb: #3a3d50;
  --scrollbar-track: transparent;
  --icon-filter: brightness(0) invert(1);
}

// =========== 响应式 ===========
@media screen and (max-width: 1200px) {
  #container {
    --logo-width: 0;
    --aside-width: 0;
    --header-height: 0;
    --header-bottom-border: 0;
    --content-grid: 1fr 1fr;
  }
}

// =========== 头部 ===========
#container-header {
  width: 100%;
  height: var(--header-height);
  display: flex;
  flex-direction: row;
  border-bottom: var(--header-bottom-border) solid var(--border-color);
  overflow: hidden;
  transition: height var(--transition-fast);
  background: var(--bg-secondary);
  backdrop-filter: blur(12px);
  z-index: 10;

  #header-logo {
    width: var(--logo-width);
    height: 70px;
    overflow: hidden;
    padding: 10px 0 0 0;

    #logo-box {
      width: 100%;
      height: 100%;

      .logo-link {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;

        .logo-img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 100%;
          transition: opacity var(--transition-time);
        }

        .logo-img1 { opacity: 1; }
        .logo-img2 { opacity: 0; }

        &:hover {
          .logo-img1 { opacity: 0; }
          .logo-img2 { opacity: 1; }
        }
      }
    }
  }

  #header-content {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 24px;

    .nav-box { flex: 1; }

    .tool-of-dark-and-light {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      cursor: pointer;
      transition: all var(--transition-fast);
      color: var(--text-secondary);

      .theme-icon {
        width: 22px;
        height: 22px;
      }

      &:hover {
        background: var(--bg-hover);
        color: var(--text-primary);
      }
    }
  }
}

// =========== 内容区 ===========
#container-content {
  flex: 1;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

#content-aside {
  width: var(--aside-width);
  height: 100%;
  padding-top: 24px;
  transition: width var(--transition-fast);
  background: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
}

#content-main {
  flex: 1;
  overflow-y: scroll;
  scrollbar-gutter: stable;
}

// =========== 浮动工具栏 ===========
#container-tool {
  position: fixed;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 100;

  .tool-item-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: var(--bg-toolbar);
    backdrop-filter: blur(12px);
    border: 1px solid var(--border-color);
    border-radius: 14px;
    cursor: pointer;
    transition: all var(--transition-fast);
    color: var(--text-secondary);
    box-shadow: var(--shadow-md);

    .tool-icon {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: var(--bg-hover);
      color: var(--accent);
      transform: translateY(-1px);
      box-shadow: var(--shadow-lg);
    }

    &:active {
      transform: translateY(0);
    }
  }
}

// =========== 主题切换过渡动画 ===========
.theme-transition-overlay {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  border-radius: 50%;
  width: 300vmax;
  height: 300vmax;
  left: var(--ox);
  top: var(--oy);
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms ease-out;
  will-change: transform;
  backface-visibility: hidden;
}

.theme-transition-overlay.shrink {
  transform: translate(-50%, -50%) scale(0);
}

.from-light { background: #f0f2f5; }
.from-dark  { background: #0f1117; }
</style>
