# 🧠 项目记忆与开发规范

> 以下为项目强制规则，所有 AI 交互与代码修改必须遵守。



> 强制规则：必须记录所有修改的文件

* 每次修改代码后，必须在项目根目录的 CHANGELOG.md 中**明确列出本次修改的所有文件路径**
* 格式要求：在「修改/新增/修复」条目下，使用 `文件：路径/文件名` 单独一行标注
* 禁止遗漏任何被修改的文件

## 静态资源引用规则（Vite / Nuxt）

本项目使用 Vite 构建，**禁止直接 `/public/` 裸路径引用资源**。所有静态资源应放在 `app/assets/` 下，通过以下方式引用：

### 模板中使用（动态 :src）
```js
import { getAssetUrl } from '~/utils/assetUrl'
// 在 setup() 中返回 getAssetUrl
// 模板：:src="getAssetUrl('svg/website/bilibili.svg')"
```

### 数据文件中的资源路径
`app/utils/assetUrl.js` 使用 `import.meta.glob` 预先构建资源 URL 映射表，数据文件通过 `resolveAssetPaths()` 自动转换路径。

### CSS 中使用
```less
background: url('~/assets/img/bg.png');
```

### 原理
- `import.meta.glob` 是 Vite 原生 API，构建时扫描匹配的文件并生成哈希 URL 映射
- `new URL()` + `import.meta.url` 是 Vite 推荐的同步资源引入方式
- 字符串拼接路径（如 `/assets/${name}.svg`）不会被 Vite 识别，打包后 404

## 字体使用规则

- 项目字体文件位于 `app/assets/font/`，包含 HarmonyOS Sans 6 个重量：Thin(100)、Light(300)、Regular(400)、Medium(500)、Bold(700)、Black(900)
- 全局默认字体栈：`'HarmonyOS Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif`
- `@font-face` 声明集中放在 `app/assets/css/global.css`
- 所有组件/页面使用 `var(--font-family)` 或直接继承 `body` 字体，禁止单独指定其他字体家族
- 新增字体文件必须同步添加 `@font-face` 声明，`font-display` 使用 `swap`


## 项目提交技能
当项目开发到一定程度时，操作者会把代码提交到 Github 仓库中，具体从提交流程如下：
```shell
git add .
git commit -m "XXXXXX"
git push
```
其中 XXXXXX 是本次提交的内容，需要补充完整，并且“项目提交技能”不能被你主动调用，需要调用者主动召唤技能

