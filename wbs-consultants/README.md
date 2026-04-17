# WBS Consultants - Modern Business Consulting Website

A modern, professional business consulting website built with React, featuring smooth animations, comprehensive service descriptions, and an admin dashboard for managing consultations.

## 🌟 Features

### Client-Facing Features

- **11 Comprehensive Services** with detailed descriptions
- **Modern Animations** using Framer Motion
- **Interactive Testimonials Carousel** with 5 client success stories
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Dark Mode Support** - Full dark theme with smooth transitions
- **Contact Form** with Firebase integration and email notifications
- **Smooth Scrolling** navigation between sections

### Admin Features

- **Secure Admin Dashboard** with Firebase authentication
- **Consultation Management** - View and manage client requests
- **Excel Export** - Download consultation data
- **Real-time Updates** - Instant notification of new requests

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Firebase account (for backend)
- EmailJS account (for email notifications)

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd wbs-consultants
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Admin Credentials
VITE_ADMIN_EMAIL=admin@wbsconsultants.com
VITE_ADMIN_PASSWORD=your_secure_password
```

4. **Run Development Server**

```bash
npm run dev
```

5. **Build for Production**

```bash
npm run build
```

## 📁 Project Structure

```
wbs-consultants/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── sections/
│   │   │   ├── About.jsx
│   │   │   ├── ConsultantVsAnalyst.jsx
│   │   │   ├── ContactCTA.jsx
│   │   │   ├── DetailedServices.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── WhyChooseUs.jsx
│   │   ├── ui/
│   │   │   ├── AnimatedCounter.jsx
│   │   │   └── SectionHeader.jsx
│   │   └── ProtectedRoute.jsx
│   ├── config/
│   │   └── firebase.js
│   ├── context/
│   │   └── AdminContext.jsx
│   ├── data/
│   │   ├── content.js
│   │   └── detailedContent.js
│   ├── hooks/
│   │   └── useTheme.js
│   ├── pages/
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminLogin.jsx
│   │   └── Home.jsx
│   ├── services/
│   │   ├── emailService.js
│   │   └── firebaseService.js
│   ├── utils/
│   │   └── excelExport.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── .env
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Services Offered

1. **Business Consultant** - Strategic advisor ("What should be done and why?")
2. **Business Analyst** - Implementation specialist ("How should it be done?")
3. **Business Finance Analyst** - Financial data to strategic actions
4. **Fund Raising Advisory** - Win-win capital acquisition partnerships
5. **Business Promotion in India** - Localized marketing strategies
6. **Finance Education** - Understanding balance sheets and financial metrics
7. **Strategic Planning & Risk Management** - Proactive growth strategies
8. **Process Optimization & Data Analysis** - Workflow efficiency
9. **Mentorship & Leadership Coaching** - Guiding growth and inspiring leaders
10. **Custom ERP Development** - Tailored enterprise solutions
11. **Financial Solution Architecture** - Bridge between finance and IT

## 🛠️ Technology Stack

### Frontend

- **React 19.2.4** - UI framework
- **Vite 8.0.4** - Build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 12.38.0** - Animation library
- **React Router DOM 7.14.1** - Client-side routing
- **Lucide React 1.8.0** - Icon library

### Backend & Services

- **Firebase 12.12.0** - Authentication and database
- **EmailJS 4.4.1** - Email notifications
- **React Intersection Observer 10.0.3** - Scroll animations

### Development Tools

- **TypeScript 6.0.2** - Type checking
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📚 Documentation

- **FIREBASE_SETUP.md** - Firebase configuration guide
- **EMAILJS_SETUP.md** - EmailJS setup instructions
- **DEPLOYMENT.md** - Deployment instructions
- **ANIMATION_GUIDE.md** - Animation customization guide
- **MODERN_IMPROVEMENTS.md** - List of all improvements
- **TRANSFORMATION_SUMMARY.md** - Complete transformation overview

## 🔐 Admin Access

Access the admin dashboard at `/admin`:

- Default email: `admin@wbsconsultants.com`
- Password: Set in `.env` file

**Features:**

- View all consultation requests
- Export data to Excel
- Manage client information
- Secure authentication

## 🎯 Key Features Explained

### Animations

- **Scroll-triggered animations** - Elements animate as you scroll
- **Hover effects** - Interactive cards and buttons
- **Stagger animations** - Sequential appearance of elements
- **Smooth transitions** - 60fps GPU-accelerated animations

### Responsive Design

- **Mobile-first approach** - Optimized for all screen sizes
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** - Large tap targets for mobile devices

### Dark Mode

- **System preference detection** - Automatically matches OS theme
- **Manual toggle** - Users can switch themes
- **Persistent** - Theme preference saved in localStorage

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Hosting

The `dist` folder contains the production build. Deploy to:

- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop `dist` folder
- **GitHub Pages** - See DEPLOYMENT.md
- **Firebase Hosting** - `firebase deploy`

## 🔧 Customization

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: colors.emerald,
      secondary: colors.teal,
    }
  }
}
```

### Add New Service

1. Add to `src/data/content.js` services array
2. Add detailed content to `src/data/detailedContent.js`
3. Component will automatically render it

### Modify Animations

See `ANIMATION_GUIDE.md` for detailed animation customization instructions.

## 📊 Performance

- **Build Size**: 811KB (gzipped: 246KB)
- **CSS Size**: 34KB (gzipped: 6.5KB)
- **Load Time**: < 2 seconds on 3G
- **Lighthouse Score**: 90+ across all metrics

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Firebase Connection Issues

- Check `.env` file configuration
- Verify Firebase project settings
- Ensure Firestore rules allow read/write

### Email Not Sending

- Verify EmailJS credentials in `.env`
- Check EmailJS dashboard for quota
- Ensure template ID matches

## 📝 License

This project is proprietary and confidential.

## 👥 Support

For support, email: contact@wbsconsultants.com

## 🙏 Acknowledgments

- Design inspiration from modern SaaS websites
- Icons by Lucide React
- Animations powered by Framer Motion
- Built with React and Vite

---

**Built with ❤️ by WBS Consultants Team**

_Last Updated: April 2026_
