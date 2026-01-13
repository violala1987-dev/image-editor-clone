# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Overview

This is a **marketing/landing page for BananaEdit**, an AI-powered image editing service. The application is built with Next.js 16 (App Router) and React 19, designed to showcase and drive users to an AI image editing platform.

### Key Architecture Patterns

**App Router Structure:**
- `app/layout.tsx` - Root layout with Inter font, metadata, and Vercel Analytics
- `app/page.tsx` - Landing page that composes multiple section components
- `app/globals.css` - Global styles merged with Tailwind

**Component Organization:**
- `components/editor-section.tsx` - Main interactive demo interface with image upload and prompt input
- `components/hero-section.tsx` - Landing page hero
- `components/ui/` - shadcn/ui component library (68 Radix-based components)

**Styling System:**
- Tailwind CSS 4.1.9 with CSS variables for theming
- Design tokens defined in `app/globals.css` (neutral base color)
- `components.json` configures shadcn/ui with "new-york" style
- Dark mode support via CSS variables

**Path Aliases:**
- `@/*` maps to project root (configured in `tsconfig.json`)

## Component Patterns

All UI components use shadcn/ui patterns:
- Import from `@/components/ui/*`
- Use `cn()` utility from `lib/utils.ts` for class merging (clsx + tailwind-merge)
- Components follow Radix UI primitives for accessibility

Client Components:
- Mark with `"use client"` directive
- Example: `components/editor-section.tsx` uses useState for image upload and prompt handling

## Build Configuration

**next.config.mjs:**
- TypeScript errors ignored during build
- Image optimization disabled (`unoptimized: true`)

**PostCSS:**
- Simple Tailwind CSS plugin configuration

## Design System

- **Icons:** Lucide React (`lucide-react`)
- **Forms:** React Hook Form with Zod validation
- **Analytics:** Vercel Analytics integrated in root layout
- **Typography:** Inter font (Google Fonts)
