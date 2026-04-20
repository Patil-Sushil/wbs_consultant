# WBS Consultants - Project Structure

## 📁 Essential Files Only

This project has been cleaned up to contain only essential files needed for production.

### Root Configuration Files

```
├── .env                          # Environment variables (keep private)
├── .gitignore                    # Git ignore rules
├── eslint.config.js              # ESLint configuration
├── index.html                    # Main HTML entry point
├── netlify.toml                  # Netlify deployment config
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Locked dependencies
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── tsconfig.app.json             # TypeScript app config
├── tsconfig.node.json            # TypeScript node config
└── vite.config.ts                # Vite build configuration
```

### Documentation Files (Essential)

```
├── README.md                     # Project overview and setup
├── EMAILJS_SETUP.md              # EmailJS configuration guide
├── EMAILJS_TEMPLATE_SETUP.md     # Email template setup
├── FIREBASE_SETUP.md             # Firebase configuration
├── NETLIFY_DEPLOYMENT.md         # Deployment instructions
└── emailjs-template.html         # Email template HTML
```

### Source Code Structure

```
src/
├── assets/                       # Images and static files
│   ├── homeicon.png             # Hero section icon
│   └── logo.png                 # Company logo
│
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── sections/                # Page sections
│   │   ├── About.jsx
│   │   ├── ConsultantVsAnalyst.jsx
│   │   ├── ContactCTA.jsx
│   │   ├── DetailedServices.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   └── WhyChooseUs.jsx
│   │
│   ├── ui/                      # Reusable UI components
│   │   ├── AnimatedCounter.jsx
│   │   ├── Logo.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── ServiceCard.jsx
│   │   └── WhatsAppButton.jsx
│   │
│   └── ProtectedRoute.jsx       # Route protection
│
├── config/
│   └── firebase.js              # Firebase configuration
│
├── context/
│   └── AdminContext.jsx         # Admin state management
│
├── data/
│   ├── content.js               # Site content data
│   └── detailedContent.js       # Detailed service content
│
├── hooks/
│   └── useTheme.js              # Theme management hook
│
├── pages/
│   ├── AdminDashboard.jsx       # Admin dashboard
│   ├── AdminLogin.jsx           # Admin login
│   └── Home.jsx                 # Main home page
│
├── services/
│   ├── emailService.js          # EmailJS integration
│   └── firebaseService.js       # Firebase services
│
├── utils/
│   └── excelExport.js           # Excel export utility
│
├── App.jsx                      # Main app component
├── index.css                    # Global styles
└── main.jsx                     # App entry point
```

### Public Assets

```
public/
├── .htaccess                    # Apache server config
├── _redirects                   # Netlify redirects
└── favicon.svg                  # Site favicon
```

## 🗑️ Deleted Files (Cleanup)

### Documentation (Historical/Redundant)

- ❌ ANIMATION_GUIDE.md
- ❌ CLEANUP_SUMMARY.md
- ❌ DEPLOY_CHECKLIST.md
- ❌ DEPLOYMENT.md
- ❌ DESIGN_UPDATE_SUMMARY.md
- ❌ EXACT_DESIGN_MATCH.md
- ❌ MODERN_IMPROVEMENTS.md
- ❌ QUICK_DEPLOY.md
- ❌ TRANSFORMATION_SUMMARY.md

### Build Artifacts

- ❌ .netlify/ (build cache folder)

## 📊 Project Statistics

### Total Files: ~50 essential files

- Source Code: ~35 files
- Configuration: ~10 files
- Documentation: ~5 files

### Technologies Used:

- **Frontend**: React 19, Vite 8
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Firebase (Auth, Firestore)
- **Email**: EmailJS
- **Deployment**: Netlify
- **Language**: JavaScript/TypeScript

## 🚀 Quick Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Lint
npm run lint

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

## 📞 Contact Information

- **Email**: shri@wbsconsultants.in
- **Phone**: +91 9371 112 215
- **Locations**: Mumbai | Bangalore | Delhi

## 🔐 Environment Variables Required

```env
# Firebase
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# EmailJS
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=

# Admin
VITE_ADMIN_EMAIL=
VITE_ADMIN_PASSWORD=
```

## 📝 Notes

- All unused documentation has been removed
- Only production-ready code remains
- Build artifacts are gitignored
- Environment variables must be set in Netlify
- Email template is ready for EmailJS setup

---

**Last Updated**: April 2026
**Version**: 1.0.0
**Status**: Production Ready ✅
