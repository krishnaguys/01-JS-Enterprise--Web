# Enterprise Portfolio

A modern, enterprise-level portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Theme**: next-themes
- **Carousel**: Embla Carousel
- **Linting**: ESLint + Prettier

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router
├── components/       # Reusable React components
├── data/             # Static data and constants
├── hooks/            # Custom React hooks
├── lib/              # Utilities and helpers
├── styles/           # Global styles
└── types/            # TypeScript type definitions

public/
├── images/           # Image assets
└── icons/            # Icon assets
```

## 🎯 Features

- ✅ Server Components (default)
- ✅ Client Components (where needed)
- ✅ Dark Mode support
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Strict TypeScript typing
- ✅ Production-ready code

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types
```

## 📋 Guidelines

- Keep page.tsx under 80 lines
- Use Server Components by default
- Business logic in separate utilities
- Responsive breakpoints: sm, md, lg, xl, 2xl
- Smooth animations with Framer Motion
- Optimize images with next/image
- Maintain strict TypeScript typing

## 📝 License

MIT