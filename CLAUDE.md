# CLAUDE.md

此文件为 Claude Code 在此仓库中工作的项目指南。

## 项目概述

程序员导航站 — Nuxt 4 静态网站分类导航，部署到 GitHub Pages（`/bitm-code-nav/`）。

## 常用命令

```bash
npm run dev        # 开发服务器 → http://localhost:3000/bitm-code-nav/
npm run generate   # 静态生成 → .output/public（部署用）
npm run build      # 生产构建 → .output
```

## 技术栈

- **Nuxt 4**（SSR）、**Vue 3.5**（Options API + setup 桥接 composables）
- **Less**（scoped 样式）、**JavaScript**（禁用 TypeScript）
- **GitHub Actions** 部署到 GitHub Pages

## 目录结构

```
bitm-code-nav/
├── nuxt.config.js              # Nuxt 配置（baseURL: /bitm-code-nav/）
├── app/
│   ├── app.vue                 # 根布局：header + sidebar + 浮动工具栏 + <NuxtPage />
│   ├── pages/
│   │   └── index.vue           # 唯一页面：SearchBar + CategorySection × N + 页脚
│   ├── components/
│   │   ├── SearchBar.vue       # 搜索栏（输入框 + 引擎选择下拉面板）
│   │   ├── SideNav.vue         # 侧边分类导航
│   │   ├── CategorySection.vue # 单个分类区块（标题 + 网站卡片网格）
│   │   └── WebsiteCard.vue     # 单个网站卡片
│   ├── composables/
│   │   ├── useClickTracker.js  # 网站点击次数统计（localStorage）
│   │   ├── useScroll.js        # 滚动控制（返回顶部/底部）
│   │   └── useSearch.js        # 搜索逻辑（引擎选择、搜索历史、执行搜索）
│   ├── data/
│   │   └── WebSiteData.js      # 全站数据（分类 + 网站 + 搜索引擎）
│   ├── utils/
│   │   └── assetUrl.js         # Vite 资源映射（import.meta.glob → getAssetUrl）
│   └── assets/
│       ├── css/global.css      # @font-face + 全局 reset
│       ├── font/               # HarmonyOS Sans 6 重量
│       └── svg/                # 所有图标（logo/nav/search/website）
└── public/
    ├── favicon.ico
    └── robots.txt
```

## 组件树

```
app.vue
├── #container-header  → Logo + 左侧图标导航按钮 + 右侧 GitHub 按钮
├── #content-aside     → <SideNav :website-data />
├── #content-main      → <NuxtPage />
│   └── index.vue
│       ├── <SearchBar :search-data />
│       ├── <CategorySection v-for :category-item />
│       │   └── <WebsiteCard v-for :website-item />
│       └── <footer>
└── #container-tool    → 滚动切换按钮
```

## 数据流

- 无 Pinia / Vuex，全部用 `ref()` + `computed()` 管理
- `WebSiteData.js` 导出 `websiteConfigData` 和 `searchConfigData`，在导出前通过 `resolveAssetPaths()` 将资源路径转为 Vite 哈希 URL
- localStorage 持久化：`searchType`（搜索引擎）、`searchStringList`（搜索历史）、`clickCounts`（网站点击次数）

## 主题系统

项目统一使用亮色主题，CSS 自定义属性全部定义在 `app/app.vue` 的 `#container` 上。
新增可主题化属性时直接在 `#container` 中添加变量即可。

## 关键约束

详见 `.claude/CLAUDE.md`，核心要点：
- **静态资源**：禁止 `/public/` 裸路径，必须用 `getAssetUrl()` 或 `url('~/assets/...')`
- **字体**：全局使用 HarmonyOS Sans，禁止单独指定字体家族
- **语言**：JavaScript，禁用 TypeScript 类型标注
- **Vue**：Options API（`export default {}`），composables 通过 `setup()` 桥接

## 路径注意

- `baseURL: '/bitm-code-nav/'`，所有路由和资源路径需考虑此前缀
- 资源经 Vite 处理后带哈希（如 `logo.abc123.svg`），不可硬编码路径
