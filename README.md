# BananaEdit - AI Powered Image Editor

一个现代化的 AI 图片编辑服务营销页面，基于 Next.js 16 和 React 19 构建，提供交互式的图片编辑演示体验。

![BananaEdit](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ 功能特点

- 🎨 **交互式图片编辑演示** - 上传图片并通过 AI 进行编辑
- 🤖 **AI 驱动** - 集成 Gemini 2.5 Flash Image API
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 🌙 **深色模式支持** - 优雅的主题切换
- 🎨 **现代化 UI** - 使用 shadcn/ui 组件库
- ⚡ **性能优化** - 自动图片压缩，确保快速加载
- 🔒 **类型安全** - 完整的 TypeScript 支持

## 🛠️ 技术栈

### 前端框架
- **Next.js 16** - React 框架（App Router）
- **React 19** - UI 库
- **TypeScript** - 类型安全

### 样式和 UI
- **Tailwind CSS 4.1.9** - 原子化 CSS 框架
- **shadcn/ui** - 高质量 React 组件库
- **Lucide React** - 图标库

### AI 服务
- **OpenRouter** - AI API 网关
- **Gemini 2.5 Flash Image** - 图片编辑 AI 模型

### 开发工具
- **ESLint** - 代码检查
- **PostCSS** - CSS 处理

## 📦 安装

### 前置要求

- Node.js 18.17 或更高版本
- npm、yarn 或 pnpm

### 克隆仓库

```bash
git clone https://github.com/violala1987-dev/image-editor-clone.git
cd image-editor-clone
```

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

## 🔑 环境变量配置

创建 `.env.local` 文件（参考 `.env.example`）：

```bash
# 复制示例文件
cp .env.example .env.local
```

在 `.env.local` 中配置以下变量：

```env
# OpenRouter API Key（必需）
# 获取地址：https://openrouter.ai/keys
OPENROUTER_API_KEY=your_openrouter_api_key_here

# OpenRouter Base URL（可选）
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
```

### 获取 OpenRouter API Key

1. 访问 [OpenRouter](https://openrouter.ai/)
2. 注册或登录账号
3. 前往 [Keys 页面](https://openrouter.ai/keys)
4. 创建新的 API Key
5. 将 API Key 复制到 `.env.local` 文件中

## 🚀 本地开发

启动开发服务器：

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 其他命令

```bash
# 生产构建
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 🌐 部署到 Vercel

### 自动部署

最简单的方式是通过 GitHub 集成自动部署：

1. 将代码推送到 GitHub
2. 访问 [Vercel](https://vercel.com)
3. 点击 "Import Project"
4. 选择您的 GitHub 仓库
5. 配置环境变量（见下方）
6. 点击 "Deploy"

### 配置环境变量

在 Vercel 项目设置中添加环境变量：

1. 进入项目设置 → **Environment Variables**
2. 添加以下变量：
   - **Key**: `OPENROUTER_API_KEY`
   - **Value**: 您的 OpenRouter API Key
3. 选择应用到所有环境（Production, Preview, Development）
4. 保存并重新部署

### 手动部署

```bash
# 构建项目
npm run build

# 使用 Vercel CLI 部署
npm install -g vercel
vercel
```

## 📁 项目结构

```
image-editor-clone/
├── app/                      # Next.js App Router
│   ├── api/                 # API 路由
│   │   └── generate/        # 图片生成 API
│   ├── globals.css          # 全局样式
│   ├── layout.tsx           # 根布局
│   └── page.tsx             # 首页
├── components/              # React 组件
│   ├── editor-section.tsx   # 编辑器演示区域
│   ├── hero-section.tsx     # 英雄区块
│   ├── features-section.tsx # 功能展示
│   ├── faq-section.tsx      # 常见问题
│   └── ui/                  # shadcn/ui 组件
├── hooks/                   # 自定义 Hooks
├── lib/                     # 工具函数
├── public/                  # 静态资源
└── styles/                  # 样式文件
```

## 🔧 配置说明

### 图片压缩

应用会自动压缩上传的图片：
- 最大尺寸：1024x1024 像素
- 质量：80%（JPEG 格式）
- 文件大小限制：5MB
- 压缩后通常在 1MB 以内

这样可以确保：
- 符合 Vercel 4MB 请求限制
- 快速上传和处理
- 节省 API 调用成本

### API 限制

- **Vercel 免费版**: 请求体最大 4MB
- **OpenRouter**: 根据您的套餐限制

## ❓ 常见问题

### 1. 为什么上传大图片会报错？

**问题**: `Request Entity Too Large FUNCTION_PAYLOAD_TOO_LARGE`

**原因**: Vercel 免费版限制请求体为 4MB

**解决**: 应用已内置图片压缩功能，会自动将图片压缩到 1MB 以内

### 2. 如何获取 OpenRouter API Key？

访问 [OpenRouter Keys](https://openrouter.ai/keys) 创建 API Key

### 3. 本地开发时 API 调用失败？

检查：
- `.env.local` 文件是否存在
- `OPENROUTER_API_KEY` 是否正确配置
- API Key 是否有效

### 4. 部署后功能不可用？

确保在 Vercel 项目设置中配置了环境变量 `OPENROUTER_API_KEY`

### 5. 如何更换 AI 模型？

修改 `app/api/generate/route.ts` 中的 `model` 参数：

```typescript
model: "google/gemini-2.5-flash-image",
// 改为其他支持的模型
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenRouter](https://openrouter.ai/)
- [Vercel](https://vercel.com/)

## 📞 联系方式

- GitHub: [@violala1987-dev](https://github.com/violala1987-dev)
- 项目链接: [https://github.com/violala1987-dev/image-editor-clone](https://github.com/violala1987-dev/image-editor-clone)

---

⭐ 如果这个项目对您有帮助，请给它一个 Star！
