# CHANGELOG

## 2026-04-29 — 项目转换为 JS + Options API

### TS → JS 转换
- 移除：app/model/Category.ts、Website.ts、SearchConfig.ts — JS 不需要接口定义
- 重命名：app/composables/useTheme.ts → useTheme.js、useScroll.ts → useScroll.js、useSearch.ts → useSearch.js
- 重命名：app/data/WebSiteData.ts → WebSiteData.js
- 重命名：nuxt.config.ts → nuxt.config.js
- 所有 .ts/.vue 文件中的类型标注已移除

### Composition API → Options API 转换
- 修改：app/app.vue — <script setup> 改为 export default { setup() }
- 修改：app/pages/index.vue — 同上
- 修改：app/components/SearchBar.vue — 同上，props 改为 Options API 声明
- 修改：app/components/SideNav.vue — 同上
- 修改：app/components/CategorySection.vue — 同上
- 修改：app/components/WebsiteCard.vue — 同上
- composables 保留 Composition API 函数（ref/watch/computed/onMounted），通过 setup() 桥接

### 主题系统完善
- 修改：app/app.vue — 扩展 14 个 CSS 自定义属性
- 修改：app/components/ — 全部硬编码颜色替换为 var(--xxx) 变量
- 修改：app/assets/css/global.css — 全局文字颜色改为 var(--text-color, #000000)
- 修复：响应式 CSS 变量添加默认值

### 审查问题修复（全部 12 项）
- 1.1 主题 class 初始状态缺失 ✅
- 1.2 搜索历史无上限增长 ✅
- 2.1 残留 console.log ✅
- 2.2 localStorage 读取逻辑重复 ✅
- 2.3 冗余显式类型标注 ✅
- 2.4 引号风格不一致 ✅
- 3.1 冗余数据字段 ✅
- 3.2 类型命名冗余 ✅
- 3.3 默认 logo 路径不一致 ✅
- 4.1 目录命名 ✅
- 4.2 app.vue 布局提升 ✅
- 5.1 re-build 脚本 ✅

### 组件拆分
- 新增：app/composables/useTheme.js、useScroll.js、useSearch.js
- 新增：app/components/SearchBar.vue、SideNav.vue、CategorySection.vue、WebsiteCard.vue
- 文档：代码审查-开发规范问题.md、CHANGELOG.md
