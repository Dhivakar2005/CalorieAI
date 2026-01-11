# 🍽️ CalorieAI - Meal Snap Analyzer

> AI-powered meal nutrition analyzer that helps you track your nutrition by simply taking a photo of your meal.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup)
- [Project Structure](#project-structure)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)

## 🎯 Overview

CalorieAI uses advanced AI to analyze photos of your meals and provide accurate nutritional information including protein, carbs, fat, and calories. No manual logging required! Simply snap a photo and let AI do the work.

## ✨ Features

- 📸 **Snap & Analyze** - Take photos of your meals for instant analysis
- 🤖 **AI-Powered** - Advanced AI provides accurate nutritional breakdown
- 📊 **Macro Tracking** - Track protein, carbs, fat, and calories
- 📈 **History & Trends** - View your nutritional history and patterns
- 🎯 **Goal Setting** - Set and track your nutritional goals
- 🌙 **Dark Mode** - Beautiful dark mode support
- 📱 **Responsive** - Works seamlessly on desktop and mobile

## 🛠️ Tech Stack

### Frontend
- **[React 18](https://reactjs.org/)** - UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and caching

### Backend & Services
- **[Supabase](https://supabase.com/)** - Backend as a Service (Auth, Database, Storage)

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Recharts](https://recharts.org/)** - Charting library

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/) or install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **yarn** package manager
- **Supabase Account** - [Sign up](https://supabase.com/) for free

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/meal-snap-analyzer.git
   cd meal-snap-analyzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory (see [Environment Setup](#environment-setup))
   ```bash
   cp .env.example .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:8080`

## 🔐 Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_PROJECT_ID=your_project_id
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_anon_key
```

### Getting Supabase Credentials

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Create a new project or select an existing one
3. Navigate to **Settings** → **API**
4. Copy the following:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **Project ID** → `VITE_SUPABASE_PROJECT_ID`
   - **anon/public key** → `VITE_SUPABASE_PUBLISHABLE_KEY`

> ⚠️ **Important**: Never commit your `.env` file to version control. It's already included in `.gitignore`.

## 📁 Project Structure

```
meal-snap-analyzer/
├── public/              # Static assets
│   ├── favicon.ico     # App favicon
│   └── robots.txt      # SEO configuration
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   │   └── ui/        # shadcn/ui components
│   ├── hooks/         # Custom React hooks
│   ├── integrations/  # External service integrations
│   │   └── supabase/  # Supabase client & queries
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   ├── App.tsx        # Main app component
│   └── main.tsx       # App entry point
├── .env               # Environment variables (not in git)
├── .env.example       # Environment template
├── .gitignore         # Git ignore rules
├── index.html         # HTML entry point
├── package.json       # Dependencies & scripts
├── tailwind.config.ts # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Development Server

The dev server runs on `http://localhost:8080` with:
- ⚡ Hot Module Replacement (HMR)
- 🔍 TypeScript type checking
- 🎨 Tailwind CSS compilation
- 📦 Automatic dependency optimization

## 🏗️ Building for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

The build output will be in the `dist/` directory, optimized and minified for deployment.

## 🚢 Deployment

### Recommended Platforms

- **[Vercel](https://vercel.com/)** - Zero-config deployment
- **[Netlify](https://www.netlify.com/)** - Continuous deployment
- **[GitHub Pages](https://pages.github.com/)** - Free static hosting

### Environment Variables

Don't forget to set your environment variables in your deployment platform:
- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Vite](https://vitejs.dev/) for the blazing fast build tool

---

<p align="center">Made with ❤️ by the CalorieAI Team</p>
