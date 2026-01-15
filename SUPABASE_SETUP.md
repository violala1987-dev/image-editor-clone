# Supabase Google 登录配置指南

本文档指导如何配置 Supabase 以实现 Google OAuth 登录功能。

## 前置要求

1. 一个 Supabase 项目
2. 一个 Google Cloud 项目

## 步骤 1: 设置 Supabase 项目

1. 访问 [Supabase Dashboard](https://supabase.com/dashboard)
2. 创建一个新项目或选择现有项目
3. 在项目设置中，找到 API 设置：
   - 复制 **Project URL**
   - 复制 **anon/public key**
4. 将这些值添加到 `.env.local` 文件：

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 步骤 2: 配置 Google OAuth

### 2.1 在 Google Cloud Console 配置

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建一个新项目或选择现有项目
3. 导航到 **APIs & Services** > **Credentials**
4. 点击 **OAuth consent screen**：
   - 选择 **External** 用户类型
   - 填写应用信息
   - 添加授权域：
     - 生产环境：`your-domain.com`
     - 开发环境：`localhost:3000`
   - 保存并继续
5. 导航到 **Credentials** > **Create Credentials** > **OAuth client ID**
6. 选择应用类型：**Web application**
7. 配置授权来源：
   - 添加 `http://localhost:3000`（本地开发）
   - 添加 `https://your-domain.com`（生产环境）
8. 配置授权重定向 URI：
   - 从 Supabase Dashboard > Authentication > URL Configuration 复制回调 URL
   - 本地开发使用：`http://localhost:3000/auth/v1/callback`
   - 生产环境使用：`https://your-project.supabase.co/auth/v1/callback`
9. 创建并保存：
   - 复制 **Client ID**
   - 复制 **Client Secret**

### 2.2 在 Supabase 中配置 Google Provider

1. 在 Supabase Dashboard 中，导航到 **Authentication** > **Providers**
2. 找到 **Google** 提供商
3. 点击启用并配置：
   - **Enabled**: 开启
   - **Client ID**: 粘贴从 Google 获取的 Client ID
   - **Client Secret**: 粘贴从 Google 获取的 Client Secret
   - **Skip nonce check**: 保持为 false
4. 保存配置

### 2.3 配置重定向 URL

在 Supabase Dashboard 中：
1. 导航到 **Authentication** > **URL Configuration**
2. 在 **Redirect URLs** 中添加：
   ```
   http://localhost:3000/auth/callback
   https://your-domain.com/auth/callback
   ```

## 步骤 3: 本地开发配置

如果你想在本地开发时使用 Google 登录，需要额外配置：

1. 在 Google Cloud Console 的 OAuth client ID 中添加：
   - **Authorized JavaScript origins**: `http://localhost:3000`
   - **Authorized redirect URIs**: `http://localhost:3000/auth/callback`

2. 在 `.env.local` 中添加环境变量：
   ```env
   SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

3. 如果使用 Supabase CLI，配置 `config.toml`：
   ```toml
   [auth.external.google]
   enabled = true
   client_id = "your-google-client-id"
   secret = "env(SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_SECRET)"
   skip_nonce_check = false
   ```

## 验证配置

1. 启动开发服务器：
   ```bash
   npm run dev
   ```

2. 访问 `http://localhost:3000`

3. 点击右上角的 "Sign in with Google" 按钮

4. 如果配置正确，你应该会被重定向到 Google 登录页面

5. 授权后，你会被重定向回应用，并看到已登录的状态

## 常见问题

### 问题 1: 重定向 URI 不匹配

确保在 Google Cloud Console 和 Supabase Dashboard 中都配置了相同的重定向 URI。

### 问题 2: 本地开发无法登录

- 检查 Google Cloud Console 中是否添加了 `localhost:3000` 作为授权来源
- 确保浏览器没有阻止重定向
- 检查控制台是否有错误信息

### 问题 3: 用户头像不显示

Google 的用户头像数据存储在 `user.user_metadata.avatar_url` 中。如果未显示，可能是用户没有设置 Google 头像。

## 安全建议

1. **不要提交 `.env.local` 文件到 Git**
2. 使用 `.env.example` 作为模板
3. 在生产环境中：
   - 使用自定义域名（避免显示 `*.supabase.co`）
   - 验证 Google 应用的品牌信息
   - 启用所有 Supabase 安全功能（RLS、Rate Limiting 等）

## 相关文档

- [Supabase SSR 认证](https://supabase.com/docs/guides/auth/server-side/creating-a-client)
- [Supabase Google OAuth](https://supabase.com/docs/guides/auth/social-login/auth-google)
- [Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2)
