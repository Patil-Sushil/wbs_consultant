# WBS Consultants Website

A premium, fully responsive, dynamic one-page corporate website for WBS Consultants - a professional consulting firm specializing in Business Strategy, Financial Analysis, and ERP Solutions.

## 🚀 Features

- **Premium Corporate Design**: Clean, executive-level sophistication with glassmorphism effects
- **Dark/Light Theme Toggle**: Smooth theme switching with localStorage persistence
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered scroll animations and interactions
- **11 Comprehensive Services**: Detailed service offerings with tabbed interface
- **Client Testimonials**: Auto-playing carousel with manual controls
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon set
- **React CountUp** - Animated counters
- **React Intersection Observer** - Scroll-triggered animations

## 📦 Installation

1. Navigate to the project directory:

```bash
cd wbs-consultants
```

2. Install dependencies (if not already installed):

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 🏗️ Project Structure

```
wbs-consultants/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          # Sticky navigation with theme toggle
│   │   │   ├── Footer.jsx          # Footer with links and social media
│   │   │   └── ThemeToggle.jsx     # Theme switcher component
│   │   ├── sections/
│   │   │   ├── Hero.jsx            # Hero section with CTA
│   │   │   ├── About.jsx           # About section with stats
│   │   │   ├── Services.jsx        # Services grid
│   │   │   ├── DetailedServices.jsx # Tabbed detailed services
│   │   │   ├── WhyChooseUs.jsx     # Value propositions
│   │   │   ├── Testimonials.jsx    # Client testimonials carousel
│   │   │   └── ContactCTA.jsx      # Contact form and info
│   │   └── ui/
│   │       ├── ServiceCard.jsx     # Reusable service card
│   │       ├── AnimatedCounter.jsx # Animated statistics
│   │       └── SectionHeader.jsx   # Section title component
│   ├── data/
│   │   └── content.js              # All content data
│   ├── hooks/
│   │   └── useTheme.js             # Theme management hook
│   ├── App.jsx                     # Main app component
│   ├── index.css                   # Global styles
│   └── main.jsx                    # Entry point
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── vite.config.js                  # Vite configuration
└── package.json                    # Dependencies
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  dark: {
    primary: '#0A0E27',
    secondary: '#141B3D',
    accent: '#00D9A3',
    // ...
  },
  light: {
    primary: '#F8FAFC',
    secondary: '#FFFFFF',
    accent: '#059669',
    // ...
  }
}
```

### Content

Update all content in `src/data/content.js`:

- Services list
- Statistics
- Testimonials
- Why Choose Us points

### Contact Information

Update contact details in:

- `src/components/sections/ContactCTA.jsx`
- `src/components/layout/Footer.jsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🌐 Deployment

You can deploy this site to:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting**: Upload the `dist` folder

## 📄 License

© 2024 WBS Consultants. All rights reserved.

## 🤝 Support

For support, email contact@wbsconsultants.com or visit our website.
