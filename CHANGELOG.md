# CHANGELOG

## 2026-04-30 — 全局代码审查问题修复

### 修复
- 文件：app/components/WebsiteCard.vue — target="_blank" 添加 rel="noopener noreferrer"
- 文件：app/pages/index.vue — 同上 + 移除不必要的 ref()
- 文件：app/app.vue — div 交互控件改为 button + 按钮样式重置 + 遮罩使用 CSS 变量 + 移除不必要的 ref()
- 文件：app/components/SearchBar.vue — 搜索引擎按钮改为 button + z-index 提升至 101 + 添加外部点击关闭
- 文件：app/composables/useSearch.js — 添加下拉外部点击关闭 + onUnmounted 清理
- 文件：app/assets/css/global.css — 添加主题背景 CSS 变量 + 修复过时 accent fallback

### 移除
- 文件：app/assets/svg/tool/tool-to-*.svg（4 个）— 未使用的死代码

### 重命名
- 文件：app/assets/svg/website/mirrot-*.svg → mirror-*.svg（4 个）— 修正拼写

---

## 2026-04-30 — accent 从紫色改为蓝色

### 修改
- 文件：app/app.vue — 强调色从紫/靛蓝改为蓝色（亮色 #5b9cf5，暗色 #60a5fa）

---

## 2026-04-30 — 再调浅 accent 强调色

### 修改
- 文件：app/app.vue — accent 再浅一档（亮色 #6366f1→#818cf8，暗色 #a5b4fc→#c7d2fe）

---

## 2026-04-30 — 优化站点数据 name 和 desc

### 修改
- 文件：app/data/WebSiteData.js — 修复 13 个 desc=name 无意义项，22 个条目优化描述，2 个过长名称精简

---

## 2026-04-30 — 调浅 hover 强调色

### 修改
- 文件：app/app.vue — accent/accent-hover 调浅一档（亮色 #4f46e5→#6366f1，暗色 #818cf8→#a5b4fc）

---

## 2026-04-30 — 修复动画原点与卡顿

### 修改
- 文件：app/composables/useTheme.js — getBoundingClientRect 精确获取按钮中心 + nextTick/rAF 两阶段触发
- 文件：app/app.vue — clip-path 改为 transform: scale() GPU 加速 + will-change 优化渲染

---

## 2026-04-30 — 修复主题切换动画中间色问题

### 修改
- 文件：app/composables/useTheme.js — 改为立即切换主题 + 记录旧主题颜色，动画从全屏收缩至点击处
- 文件：app/app.vue — 遮罩层使用旧主题背景色、clip-path 收缩动画（250ms），消除 invert 产生的中间色

---

## 2026-04-30 — 主题切换动画

### 修改
- 文件：app/composables/useTheme.js — 新增主题切换圆形扩散动画（clip-path circle）
- 文件：app/app.vue — 添加过渡遮罩层及动画样式，按钮事件传递坐标

---

## 2026-04-30 — 搜索框颜色调整

### 修改
- 文件：app/app.vue — 调深搜索框默认背景色，增强与页面背景的对比度（亮色 #e8ecf1→#dde1e7，暗色 #1c1f2e→#232738）

---

## 2026-04-30 — Claude Code 工作流文档

### 新增
- 文件：.claude/settings.json — 项目权限配置

### 修改
- 文件：CLAUDE.md — 重写为完整项目开发指南
- 文件：.claude/CLAUDE.md — 重写为强制规则+技能+场景文档

### 移除
- 文件：app/assets/svg/website/chatgpt.svg — 未使用的重复文件

---

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
