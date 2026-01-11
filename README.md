# 🍽️ CalorieAI - AI-Powered Meal Nutrition Analyzer

> Snap a photo of your meal and get instant AI-powered nutritional analysis with detailed macro and micronutrient breakdowns.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![n8n](https://img.shields.io/badge/n8n-Workflow-FF6D5A.svg)](https://n8n.io/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [n8n Agent Setup](#n8n-agent-setup)
- [Environment Setup](#environment-setup)
- [Project Structure](#project-structure)
- [Development](#development)
- [Building for Production](#building-for-production)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)

## 🎯 Overview

CalorieAI is a modern web application that leverages cutting-edge AI technology to analyze meal photos and provide comprehensive nutritional information. Simply snap a photo of your meal, and our AI agent will identify the food items and calculate accurate nutritional values including calories, protein, carbs, fats, and other important nutrients.

The application combines a beautiful React frontend with a powerful n8n workflow automation backend powered by OpenAI's GPT-4.1-mini vision model.

## ✨ Features

- 📸 **Instant Photo Analysis** - Upload or snap photos of your meals for real-time analysis
- 🤖 **AI-Powered Recognition** - Advanced GPT-4.1 vision model identifies food items accurately
- 📊 **Detailed Nutritional Breakdown** - Get comprehensive macro and micronutrient information
- 🎯 **Per-Item Analysis** - Individual nutritional data for each food item in your meal
- 📈 **History & Trends** - Track your nutritional intake over time
- 🎯 **Goal Setting** - Set and monitor your nutritional goals
- 🌙 **Dark Mode** - Beautiful dark mode support for comfortable viewing
- 📱 **Fully Responsive** - Seamless experience across desktop, tablet, and mobile devices
- ⚡ **Real-time Processing** - Fast webhook-based architecture for instant results

## 🏗️ Architecture

CalorieAI uses a modern, scalable architecture:

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│                 │         │                  │         │                 │
│  React Frontend │────────▶│  n8n Workflow    │────────▶│  OpenAI GPT-4.1 │
│  (Vite + TS)    │         │  Agent           │         │  Vision Model   │
│                 │         │                  │         │                 │
└─────────────────┘         └──────────────────┘         └─────────────────┘
        │                            │
        │                            │
        ▼                            ▼
┌─────────────────┐         ┌──────────────────┐
│                 │         │                  │
│  Supabase       │         │  Structured      │
│  (Auth + DB)    │         │  JSON Response   │
│                 │         │                  │
└─────────────────┘         └──────────────────┘
```

### How It Works

1. **User uploads** a meal photo through the React frontend
2. **Frontend sends** the image to the n8n webhook endpoint
3. **n8n workflow** processes the request through an AI Agent
4. **OpenAI GPT-4.1-mini** analyzes the image and identifies food items
5. **Structured parser** formats the response into standardized JSON
6. **Frontend receives** detailed nutritional data for each food item
7. **Supabase stores** the analysis for history and tracking

## 🛠️ Tech Stack

### Frontend
- **[React 18](https://reactjs.org/)** - Modern UI framework with hooks
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[TanStack Query](https://tanstack.com/query)** - Powerful data fetching and caching

### Backend & AI
- **[n8n](https://n8n.io/)** - Workflow automation platform
- **[OpenAI GPT-4.1-mini](https://openai.com/)** - Vision-capable language model
- **[Supabase](https://supabase.com/)** - Backend as a Service (Auth, Database, Storage)

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Recharts](https://recharts.org/)** - Responsive charting library

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Supabase Account** - [Sign up](https://supabase.com/) for free
- **n8n Instance** - [Self-hosted](https://docs.n8n.io/hosting/) or [n8n Cloud](https://n8n.io/cloud/)
- **OpenAI API Key** - [Get your key](https://platform.openai.com/api-keys)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dhivakar2005/CalorieAI.git
   cd CalorieAI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Fill in your credentials (see [Environment Setup](#environment-setup))

4. **Set up the n8n workflow**
   
   See [n8n Agent Setup](#n8n-agent-setup) for detailed instructions

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:8080`

## 🤖 n8n Agent Setup

The CalorieAI backend uses an n8n workflow to process meal images and return nutritional data.

### Workflow Overview

The `Calories_Analysis_Agent.json` workflow contains:

1. **Webhook Node** - Receives POST requests with meal images
2. **AI Agent Node** - Orchestrates the analysis process
3. **OpenAI Chat Model** - GPT-4.1-mini with vision capabilities
4. **Structured Output Parser** - Formats responses into consistent JSON
5. **Respond to Webhook** - Returns the analysis results

### Setting Up n8n

#### Option 1: n8n Cloud (Recommended)

1. Sign up for [n8n Cloud](https://n8n.io/cloud/)
2. Create a new workflow
3. Import the `Calories_Analysis_Agent.json` file
4. Configure your OpenAI credentials
5. Activate the workflow
6. Copy the webhook URL

#### Option 2: Self-Hosted n8n

1. **Install n8n**
   ```bash
   npm install -g n8n
   ```

2. **Start n8n**
   ```bash
   n8n start
   ```

3. **Access n8n** at `http://localhost:5678`

4. **Import the workflow**
   - Click "Import from File"
   - Select `Calories_Analysis_Agent.json`

5. **Configure OpenAI credentials**
   - Go to Settings → Credentials
   - Add your OpenAI API key

6. **Activate the workflow**
   - Click the toggle to activate
   - Copy the webhook URL from the Webhook node

7. **Update your `.env` file**
   ```env
   VITE_N8N_WEBHOOK_URL=your_webhook_url_here
   ```

### Workflow Configuration

The AI agent is configured with the following prompt:

```
Analyze the dish in this image and provide a detailed nutritional breakdown, 
including estimated calories, macronutrients (protein, carbs, fats), and any 
notable micronutrients or health considerations.
```

### Expected Response Format

The structured output parser ensures responses follow this JSON schema:

```json
{
  "status": "success",
  "food": [
    {
      "name": "Grilled Chicken Breast",
      "quantity": "150g",
      "calories": 240,
      "protein": 45,
      "carbs": 0,
      "fat": 5
    },
    {
      "name": "Steamed Broccoli",
      "quantity": "100g",
      "calories": 35,
      "protein": 3,
      "carbs": 7,
      "fat": 0
    }
  ],
  "total": {
    "calories": 275,
    "protein": 48,
    "carbs": 7,
    "fat": 5
  }
}
```

## 🔐 Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_PROJECT_ID=your_project_id
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_anon_key

# n8n Webhook Configuration
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id
```

### Getting Supabase Credentials

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Create a new project or select an existing one
3. Navigate to **Settings** → **API**
4. Copy the following:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **Project ID** → `VITE_SUPABASE_PROJECT_ID`
   - **anon/public key** → `VITE_SUPABASE_PUBLISHABLE_KEY`

### Getting n8n Webhook URL

1. Open your n8n instance
2. Open the Calories Analysis Agent workflow
3. Click on the **Webhook** node
4. Copy the **Production URL**
5. Paste it as `VITE_N8N_WEBHOOK_URL`

> ⚠️ **Important**: Never commit your `.env` file to version control. It's already included in `.gitignore`.

## 📁 Project Structure

```
CalorieAI/
├── public/                      # Static assets
│   ├── favicon.ico             # App favicon
│   └── robots.txt              # SEO configuration
├── src/
│   ├── assets/                 # Images, fonts, etc.
│   ├── components/             # React components
│   │   └── ui/                # shadcn/ui components
│   ├── hooks/                  # Custom React hooks
│   ├── integrations/           # External service integrations
│   │   └── supabase/          # Supabase client & queries
│   ├── lib/                    # Utility functions
│   ├── pages/                  # Page components
│   ├── App.tsx                 # Main app component
│   ├── index.css              # Global styles & Tailwind
│   └── main.tsx               # App entry point
├── supabase/                   # Supabase configuration
│   └── functions/             # Edge functions
│       └── analyze-nutrition/ # Nutrition analysis function
├── Calories_Analysis_Agent.json # n8n workflow definition
├── .env                        # Environment variables (not in git)
├── .env.example               # Environment template
├── .gitignore                 # Git ignore rules
├── components.json            # shadcn/ui configuration
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry point
├── package.json               # Dependencies & scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── tsconfig.app.json          # App TypeScript config
├── tsconfig.node.json         # Node TypeScript config
└── vite.config.ts             # Vite configuration
```

## 💻 Development

### Available Scripts

```bash
# Start development server (runs on port 8080)
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
- 🎨 Tailwind CSS compilation with JIT mode
- 📦 Automatic dependency optimization
- 🔄 Fast refresh for React components

### Code Quality

The project uses:
- **ESLint** - Code linting with TypeScript support
- **TypeScript** - Static type checking
- **Prettier** (recommended) - Code formatting

## 🏗️ Building for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

The build output will be in the `dist/` directory, fully optimized and minified for deployment.

### Build Optimizations

- Tree-shaking for minimal bundle size
- Code splitting for faster initial load
- Asset optimization (images, fonts)
- CSS purging with Tailwind
- Minification and compression

## 🚢 Deployment

### Recommended Platforms

- **[Vercel](https://vercel.com/)** - Zero-config deployment with automatic HTTPS
- **[Netlify](https://www.netlify.com/)** - Continuous deployment from Git
- **[GitHub Pages](https://pages.github.com/)** - Free static hosting

### Environment Variables

Don't forget to set your environment variables in your deployment platform:
- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_N8N_WEBHOOK_URL`

### Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📡 API Documentation

### n8n Webhook Endpoint

**Endpoint:** `POST {VITE_N8N_WEBHOOK_URL}`

**Request Body:**
```json
{
  "image": "base64_encoded_image_string"
}
```

**Response:**
```json
{
  "status": "success",
  "food": [
    {
      "name": "Food Item Name",
      "quantity": "Amount",
      "calories": 0,
      "protein": 0,
      "carbs": 0,
      "fat": 0
    }
  ],
  "total": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0
  }
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) for the powerful GPT-4.1-mini vision model
- [n8n](https://n8n.io/) for the flexible workflow automation platform
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Vite](https://vitejs.dev/) for the blazing fast build tool

## 🐛 Troubleshooting

### Common Issues

**Issue: Webhook not responding**
- Ensure your n8n workflow is activated
- Check that the webhook URL in `.env` is correct
- Verify your OpenAI API key is valid

**Issue: Build errors**
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

**Issue: Supabase connection errors**
- Verify your Supabase credentials in `.env`
- Check that your Supabase project is active

## 📞 Support

For issues and questions:
- Open an issue on [GitHub](https://github.com/Dhivakar2005/CalorieAI/issues)
- Check the [n8n documentation](https://docs.n8n.io/)
- Review [Supabase docs](https://supabase.com/docs)

---

<p align="center">Made with ❤️ and AI by Dhivakar</p>
<p align="center">Powered by OpenAI GPT-4.1-mini, n8n, and Supabase</p>
