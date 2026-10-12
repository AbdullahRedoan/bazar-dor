<div align="center">

# 🛒 BazarDor (বাজার দর)

### _Your Trusted Daily Market Price Tracker & Smart Grocery Assistant_

[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![BetterAuth](https://img.shields.io/badge/BetterAuth-Secured-emerald?style=for-the-badge)](https://betterauth.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[Live Demo](#-live-demo) • [Features](#-key-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure)

</div>

---

## 📖 About The Project

**BazarDor (বাজার দর)** is a modern, fully responsive, data-driven web application built to track daily market prices of essential commodities in Bangladesh. Inspired by professional Figma design specifications, BazarDor empowers consumers, market analysts, and everyday shoppers to monitor price fluctuations, compare market items across categories (Rice, Lentils, Oils, Vegetables, Fish, Meat, Spices, etc.), and view real-time market trends (Risers & Fallers).

---

## ✨ Key Features

- **🌐 Real-Time Market Data Integration:** Powered by live Cloudflare Workers API endpoints delivering up-to-date daily commodity pricing.
- **🔐 Secure Authentication:** Seamless user management and social authentication (Google & GitHub) powered by **BetterAuth** with real-time feedback toasts.
- **🏷️ Dynamic Category Filtering & Search:** Filter products instantly by categories with active state pill styling and search queries (`/products?category=...`).
- **📈 Price Trend Insights:** Highlight risers and fallers in commodity pricing across local bazaars.
- **🇧🇬 Bengali Localization:** Custom Bengali utility formatting for numbers, currencies, and UI copy.
- **🛡️ Robust Error & 404 Handling:** Graceful empty states, skeleton loaders, and custom `not-found.tsx` boundaries for non-existent items or routes.
- **📱 Responsive Mobile-First Design:** Crafted with Tailwind CSS following strict Figma design guidelines.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** [BetterAuth](https://betterauth.com/)
- **Notifications:** `react-hot-toast`
- **API Source:** Cloudflare Workers (`https://api.abcz.workers.dev/api/bazardor`)

---

## 📁 Project Directory Structure

````text
📦
├── public/                 # Static assets and icons
└── src/
    ├── app/                # Next.js App Router
    │   ├── api/auth/[...all]/ # BetterAuth API route handler
    │   ├── components/     # Component modules
    │   │   ├── shared/     # Global layout components
    │   │   │   ├── header/ # Navbar, Categories, Marquee, UserInfo
    │   │   │   └── footer.tsx
    │   │   └── home/       # Homepage modular sections (Banner, Risen/Fallen Products)
    │   ├── products/       # Products listing & dynamic detail routes ([slug])
    │   ├── profile/        # User profile view
    │   ├── signIn/         # Login page
    │   ├── signUp/         # Registration page
    │   ├── layout.tsx      # Root layout wrapper with providers & toast listener
    │   ├── page.tsx        # Homepage
    │   ├── loading.tsx     # Global suspense loading fallback
    │   └── not-found.tsx   # Custom 404 Error page
    ├── lib/                # Configuration and utilities
    │   ├── auth.ts         # Server-side BetterAuth setup
    │   └── auth-client.ts  # Client-side BetterAuth hooks & client
    └── types/              # TypeScript interface definitions




## 🚀 Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Make sure you have Node.js installed (v18.x or higher recommended):
```bash
node -v
````

### Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/bazardor.git
   cd bazardor
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your configuration credentials:

   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   BETTER_AUTH_SECRET=your_generated_better_auth_secret
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 💡 Troubleshooting & Common Issues

- **Windows Git Casing Conflicts:** If you encounter casing issues with component file paths on Windows, force Git tracking:
  ```bash
  git config core.ignorecase false
  ```
- **Next.js 15 Async Params:** Dynamic route parameters (`params`) must be awaited before usage in page components.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request for any enhancements or bug fixes.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git-push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">
  <p>Developed with ❤️ for tracking daily market prices in Bangladesh.</p>
</div>
