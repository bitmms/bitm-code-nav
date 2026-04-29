# 项目开发规范与技能

> 以下为强制规则，所有 AI 交互与代码修改必须遵守。

---

## 强制规则

### 规则 1：CHANGELOG 记录

每次修改代码后，必须在项目根目录的 `CHANGELOG.md` 中列出本次修改的所有文件路径。格式：

```markdown
### 修改
- 文件：app/app.vue — 修改说明
- 文件：app/components/SideNav.vue — 修改说明

### 新增
- 文件：app/components/NewComp.vue — 新增说明
```

禁止遗漏任何被修改的文件。

### 规则 2：项目提交技能（不可主动调用）

此技能需要操作者明确召唤才能执行。

```shell
git add .
git commit -m "本次提交内容的简要描述"
git push
```

提交信息需概括本次修改的核心内容。末尾自动附带 `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`。

---

## 静态资源规则

本项目使用 Vite 构建，**禁止**直接使用 `/public/` 裸路径引用资源（如 `/svg/xxx.svg`）。所有资源放在 `app/assets/` 下。

### 模板中使用（动态 :src）

```js
import { getAssetUrl } from '~/utils/assetUrl'
// 在 setup() 中返回 getAssetUrl 供模板使用
// 模板：:src="getAssetUrl('svg/website/example.svg')"
```

### CSS 中使用

```less
background: url('~/assets/img/bg.png');
```

### 数据文件中新增资源路径

在 `app/data/WebSiteData.js` 中的 `iconSvg` 或 `logo` 字段使用相对路径（如 `svg/website/new.svg`），`resolveAssetPaths()` 会在导出前自动转换为 Vite 哈希 URL。

### 原理

- `app/utils/assetUrl.js` 使用 `import.meta.glob` 构建时扫描所有资源文件，生成路径→哈希 URL 映射
- 字符串拼接路径（如 `/assets/${name}.svg`）不会被 Vite 识别为依赖，打包后 404
- 新增 SVG/PNG 到 `app/assets/` 后无需额外配置，glob 自动匹配

---

## 字体规则

- 字体文件：`app/assets/font/HarmonyOS_Sans_*.ttf`（6 个重量）
- `@font-face` 声明集中在 `app/assets/css/global.css`
- 全局字体栈：`'HarmonyOS Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif`
- CSS 变量 `--font-family` 已定义在 `app.vue` 的 `#container` 上，组件通过 `var(--font-family)` 或直接继承 `body` 使用
- **禁止**在任何组件中单独指定其他字体家族
- 新增字体文件必须同步添加 `@font-face`，`font-display: swap`

---

## 主题系统规则

主题通过 CSS 自定义属性实现，所有变量定义在 `app/app.vue` 的 `#container` 上。

### 变量分层

```
#container          ← 基类 = 亮色默认值（同时也是兜底，防止首屏黑闪）
#container.light    ← 仅设 --bg-image（亮色独有）
#container.dark     ← 覆盖为暗色值
```

### 修改或新增主题变量

1. 先在基类 `#container` 中添加/修改变量的亮色默认值
2. 再在 `#container.dark` 中覆盖为暗色值
3. **禁止**在 `#container.light` 中重复基类已有的值

### 暗色图标处理

侧边栏和分类标题图标通过 CSS 变量 `--icon-filter` 在暗色模式下反色：

```less
// 基类默认
--icon-filter: none;
// 暗色覆盖
--icon-filter: brightness(0) invert(1);
// 需要反色的 img 上
img { filter: var(--icon-filter); }
```

网站 logo（WebsiteCard）和搜索引擎图标不需要暗色滤镜。

---

## 技术栈约束

| 约束 | 说明 |
|------|------|
| 语言 | **JavaScript**，禁止使用 TypeScript（无类型标注、无 `.ts` 文件、无 `interface`） |
| Vue API | **Options API**（`export default { props, setup, ... }`），composables 通过 `setup()` 桥接 |
| CSS | **Less + scoped**，全局样式放 `global.css` |
| 数据 | 静态常量导出，无数据库，无外部 API |
| 构建 | `npm run generate` 必须通过再提交 |

---

## 常见修改场景

### 新增一个网站卡片

1. 将网站 logo SVG 放到 `app/assets/svg/website/`
2. 在 `app/data/WebSiteData.js` 中找到对应分类的 `children` 数组，添加条目：
   ```js
   {
       "name": "网站名称",
       "href": "https://example.com",
       "desc": "网站描述",
       "logo": "svg/website/example.svg"
   }
   ```
3. `npm run generate` 验证

### 新增一个分类

1. 在 `app/assets/svg/nav/` 放分类图标 SVG
2. 在 `app/data/WebSiteData.js` 的 `websiteConfigData` 数组中添加分类对象
3. `npm run generate` 验证

### 新增搜索引擎

1. 在 `app/assets/svg/search/` 放搜索引擎图标 SVG
2. 在 `app/data/WebSiteData.js` 的 `searchConfigData.list` 中添加条目
3. `npm run generate` 验证

### 修改主题颜色

1. 编辑 `app/app.vue` 中基类 `#container` 的 CSS 变量（亮色默认值）
2. 编辑 `#container.dark` 中对应变量（暗色覆盖值）
3. `npm run dev` 检查两种主题下效果

### 添加新的 CSS 变量

1. 在 `app/app.vue` 基类 `#container` 中定义变量及亮色默认值
2. 在 `#container.dark` 中定义暗色值
3. 在需要的组件的 `<style scoped>` 中通过 `var(--变量名)` 使用
