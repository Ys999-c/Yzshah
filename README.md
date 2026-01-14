# Yug Shah - AI/ML Portfolio Website

A modern, high-performance portfolio website designed to showcase the profile of an aspiring AI/ML Engineer. Built with React, Tailwind CSS, and Framer Motion, featuring a sleek minimalist design, immersive animations, and mobile-optimized interactivity.

## ✨ Features

- **Dynamic Theming System**:
  - 🌑 **Dark Mode (Default)**: Deep black background with Indigo/Purple accents.
  - ☀️ **Light Mode**: Clean white interface with energetic Orange accents.
  - 📷 **Monochromatic Mode**: High-contrast grayscale for a raw, technical look.

- **Mobile-Optimized Experience**:
  - **Haptic Feedback**: Integrated vibration feedback for touch interactions on supported devices.
  - **Micro-Interactions**: Subtle animations, hover states, and "lifting" cards.

- **Modern UI Components**:
  - **Spotlight Cards**: Mouse-tracking gradient borders and hover effects.
  - **Animated Tech Stack**: Interactive icon strip showcasing AI/ML tools.
  - **Scroll Progress**: Visual indicator at the top of the viewport.

## 🛠️ Tech Stack

- **Core**: React 19 (TypeScript)
- **Styling**: Tailwind CSS (configured via CDN for rapid prototyping) + CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📂 Project Structure

```text
├── index.html               # Entry point, Theme CSS variables, Tailwind Config
├── App.tsx                  # Main application shell, Theme logic, Navigation
├── types.ts                 # TypeScript interfaces
├── components/
│   ├── Hero.tsx             # "Architecting Intelligence" landing section
│   ├── About.tsx            # Bio, Stats, and Skills grid
│   ├── Connect.tsx          # Social media links with Spotlight cards
│   ├── Footer.tsx           # Footer section
│   └── ui/
│       └── SpotlightCard.tsx # Reusable card component with gradient effects
```

## 🚀 Setup & Usage

### 1. Logo Configuration
Ensure you have your logo file named `logo.png` placed in the root directory (alongside `index.html`). The website is configured to automatically invert the logo colors based on the selected theme (Dark/Light).

### 2. Customizing Themes
Theme colors are defined as CSS variables in `index.html`. You can modify the hex codes in the `<style>` block to change the brand colors:

```css
/* Example: Changing Light Mode Accent */
[data-theme="light"] {
  --accent-primary: #f97316; /* Current: Orange */
}
```

### 3. Running the Project
This project uses ES Modules via `importmap` in `index.html`, allowing it to run directly in modern browser environments or simple static file servers without a complex build step.

## 👤 Author

**Yug Shah**  
Aspiring AI/ML Engineer  
© 2026 All Rights Reserved.
