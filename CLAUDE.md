# CLAUDE.md

此文件为 Claude Code（claude.ai/code）在此仓库中工作时提供指导。

## 项目概述

程序员导航站 — 基于 Nuxt 4 的静态网站分类导航，部署到 GitHub Pages（`/bitm-code-nav/`）。

## 常用命令

```bash
npm run dev        # 开发服务器
npm run build      # 生产构建（.output）
npm run generate   # 静态生成（用于 GitHub Pages 部署）
```

## 技术栈

- **Nuxt 4**（SSR 启用）、**Vue 3.5**（Options API + setup 桥接）
- **Less** 作为 CSS 预处理器
- **JavaScript**（无类型标注）
- **GitHub Actions** 用于 GitHub Pages 部署

## 架构

### 路由
单页面应用 — 仅有一个路由（`app/pages/index.vue`）。无 API 路由或服务器中间件。

### 组件结构
- `app/app.vue` — 根布局，包含 header、sidebar、toolbar
- `app/pages/index.vue` — 页面内容：SearchBar + CategorySection 列表 + 页脚
- `app/components/` — SearchBar、SideNav、CategorySection、WebsiteCard
- `app/composables/` — useTheme、useScroll、useSearch

### 数据层
所有网站数据硬编码在 `app/data/WebSiteData.js` 中，导出两个常量。资源路径在导出前通过 `app/utils/assetUrl.js`（`import.meta.glob`）自动转换为 Vite 哈希 URL。

### 静态资源
所有资源放在 `app/assets/` 下，**禁止**使用 `/public/` 裸路径。引用方式见 `.claude/CLAUDE.md`。

### 页面结构
- **`app/app.vue`** — 根布局：Header（Logo + 主题切换）、Sidebar、浮动工具栏
- **`app/pages/index.vue`** — 页面内容：SearchBar + CategorySection 列表 + 页脚
- Header 中 Logo 带悬停交换效果，浮动工具栏含滚动到顶部/底部 + 主题切换

### 状态管理
无 Pinia 或 Vuex — 使用本地 `ref`/`computed` 管理状态。通过 `localStorage` 持久化：搜索引擎选择、暗色/亮色主题、搜索历史字符串列表。

### 响应式设计
通过 CSS 自定义属性（`--logo-width`、`--aside-width`、`--header-height`、`--content-grid`）处理响应式布局，在 1200px 断点处切换值。小屏幕隐藏侧边栏和头部。

### 生产部署
通过 GitHub Actions 部署到 GitHub Pages，静态生成输出到 `.output/public`。

### 路径注意事项
应用基础路径在 `nuxt.config.js` 中设置为 `/bitm-code-nav/`。所有静态资源通过 Vite 的 `import.meta.glob` 处理，资源 URL 在构建时自动生成哈希路径。
