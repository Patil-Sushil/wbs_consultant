# Customization Guide - WBS Consultants Website

This guide will help you customize the website content, styling, and functionality without deep technical knowledge.

## 📝 Content Updates

### 1. Company Information

**File:** `src/data/content.js`

Update company details, services, testimonials, and statistics in this single file.

#### Services

```javascript
export const services = [
  {
    id: 1,
    icon: Target, // Icon from lucide-react
    title: "Your Service Name",
    description: "Brief description of the service",
    link: "#section-id", // Link to detailed section
  },
  // Add more services...
];
```

#### Statistics

```javascript
export const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 12, suffix: "+", label: "Industries Served" },
];
```

#### Testimonials

```javascript
export const testimonials = [
  {
    id: 1,
    quote: "Your client testimonial here...",
    author: "Client Name",
    position: "Position at Company",
    rating: 5,
  },
  // Add more testimonials...
];
```

---

### 2. Contact Information

**Files to update:**

- `src/components/sections/ContactCTA.jsx`
- `src/components/layout/Footer.jsx`

**In ContactCTA.jsx:**

```javascript
// Line ~60-80
<Mail className="w-6 h-6 text-white" />
<a href="mailto:your-email@company.com">
  your-email@company.com
</a>

<Phone className="w-6 h-6 text-white" />
<a href="tel:+91XXXXXXXXXX">
  +91 XXXXX XXXXX
</a>

<MapPin className="w-6 h-6 text-white" />
<p className="text-white">Your City | Your City | Your City</p>
```

---

### 3. Hero Section

**File:** `src/components/sections/Hero.jsx`

**Update headline (Line ~30-40):**

```javascript
<h1>
  <span className="gradient-text">Your First Line.</span>
  <br />
  <span className="gradient-text">Your Second Line.</span>
  <br />
  <span className="gradient-text">Your Third Line.</span>
</h1>
```

**Update subheadline (Line ~45):**

```javascript
<p>Your company tagline or description here.</p>
```

---

### 4. About Section

**File:** `src/components/sections/About.jsx`

**Update section title (Line ~15):**

```javascript
<h2>Your Trusted Partner in [Your Industry]</h2>
```

**Update role descriptions (Line ~35-60):**

```javascript
<h3>Role Name → Key Focus</h3>
<p>Description of what this role does...</p>
```

**Update company description (Line ~70):**

```javascript
<p>Your company's mission statement and value proposition...</p>
```

---

### 5. Detailed Services Content

**File:** `src/components/sections/DetailedServices.jsx`

**Update tabs (Line ~10-20):**

```javascript
const tabs = [
  { id: "service-id", label: "Service Name", icon: IconName },
  // Add more tabs...
];
```

**Update content (Line ~25+):**

```javascript
const content = {
  "service-id": {
    title: "Service Title",
    subtitle: "Service Subtitle",
    description: "Detailed description...",
    points: ["Key point 1", "Key point 2", "Key point 3"],
    footer: "Optional footer note",
  },
  // Add more services...
};
```

---

## 🎨 Styling Customization

### 1. Colors

**File:** `tailwind.config.js`

**Update color scheme:**

```javascript
colors: {
  dark: {
    primary: '#YourColor',    // Main background
    secondary: '#YourColor',  // Secondary background
    accent: '#YourColor',     // Primary accent color
    accentBlue: '#YourColor', // Secondary accent
    text: '#YourColor',       // Text color
    textSecondary: '#YourColor' // Secondary text
  },
  light: {
    // Same structure for light mode
  }
}
```

**Quick color presets:**

**Professional Blue:**

```javascript
dark: {
  primary: '#0A1929',
  secondary: '#1A2332',
  accent: '#2196F3',
  accentBlue: '#64B5F6',
}
```

**Modern Purple:**

```javascript
dark: {
  primary: '#1A0B2E',
  secondary: '#2D1B4E',
  accent: '#9D4EDD',
  accentBlue: '#C77DFF',
}
```

**Corporate Red:**

```javascript
dark: {
  primary: '#1A0F0F',
  secondary: '#2D1A1A',
  accent: '#EF4444',
  accentBlue: '#F87171',
}
```

---

### 2. Fonts

**File:** `src/index.css`

**Update Google Fonts import (Line 1):**

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap");
```

**Update font families in `tailwind.config.js`:**

```javascript
fontFamily: {
  sans: ['YourBodyFont', 'system-ui', 'sans-serif'],
  display: ['YourHeadingFont', 'sans-serif'],
  accent: ['YourAccentFont', 'sans-serif'],
}
```

**Popular font combinations:**

1. **Modern & Clean:**
   - Display: Poppins
   - Body: Inter
   - Accent: Montserrat

2. **Professional:**
   - Display: Playfair Display
   - Body: Source Sans Pro
   - Accent: Roboto

3. **Tech-Focused:**
   - Display: Space Grotesk
   - Body: IBM Plex Sans
   - Accent: JetBrains Mono

---

### 3. Logo

**Replace logo in:**

- `src/components/layout/Navbar.jsx` (Line ~50)
- `src/components/layout/Footer.jsx` (Line ~30)

**Option 1: Text Logo (Current)**

```javascript
<div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg">
  <span className="text-white font-bold text-xl">WBS</span>
</div>
```

**Option 2: Image Logo**

```javascript
<img src="/logo.png" alt="Company Logo" className="h-10 w-auto" />
```

---

### 4. Images

**Replace placeholder images:**

**About Section Image:**

- File: `src/components/sections/About.jsx` (Line ~30)
- Replace Unsplash URL with your image path

```javascript
<img src="/images/team-photo.jpg" alt="Professional Team" />
```

**Add images to project:**

1. Create `public/images/` folder
2. Add your images there
3. Reference as `/images/your-image.jpg`

---

## 🔧 Functionality Customization

### 1. Contact Form

**File:** `src/components/sections/ContactCTA.jsx`

**Add form submission handler (Line ~10):**

**Option A: Email Service (EmailJS)**

```javascript
import emailjs from "@emailjs/browser";

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    });
};
```

**Option B: Custom API**

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("https://your-api.com/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  }
};
```

---

### 2. Navigation Links

**File:** `src/components/layout/Navbar.jsx`

**Update navigation items (Line ~15):**

```javascript
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Your Section", href: "#your-section" },
  { name: "Another Section", href: "#another" },
  // Add or remove links...
];
```

---

### 3. Social Media Links

**File:** `src/components/layout/Footer.jsx`

**Update social links (Line ~25):**

```javascript
social: [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/your-company",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/your-handle",
  },
  // Add more social links...
];
```

---

### 4. Add New Section

**Step 1:** Create component file

```javascript
// src/components/sections/NewSection.jsx
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const NewSection = () => {
  return (
    <section id="new-section" className="py-20 bg-white dark:bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Your Section Title"
          subtitle="Your section subtitle"
        />

        {/* Your content here */}
      </div>
    </section>
  );
};

export default NewSection;
```

**Step 2:** Import in App.jsx

```javascript
import NewSection from "./components/sections/NewSection";

// Add to render:
<NewSection />;
```

**Step 3:** Add to navigation

```javascript
// In Navbar.jsx
{ name: 'New Section', href: '#new-section' }
```

---

## 📱 Responsive Adjustments

### Breakpoint Customization

**File:** `tailwind.config.js`

```javascript
theme: {
  screens: {
    'sm': '640px',   // Mobile
    'md': '768px',   // Tablet
    'lg': '1024px',  // Desktop
    'xl': '1280px',  // Large Desktop
    '2xl': '1536px', // Extra Large
  }
}
```

### Hide/Show on Different Screens

```javascript
// Hide on mobile, show on desktop
<div className="hidden lg:block">Desktop only</div>

// Show on mobile, hide on desktop
<div className="block lg:hidden">Mobile only</div>

// Different layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 column mobile, 2 tablet, 3 desktop */}
</div>
```

---

## 🎯 Animation Customization

### Adjust Animation Speed

**File:** `tailwind.config.js`

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out', // Change 0.6s
  'slide-up': 'slideUp 0.6s ease-out',
  'float': 'float 3s ease-in-out infinite', // Change 3s
}
```

### Disable Animations

**In any component:**

```javascript
// Remove motion wrapper
<motion.div> → <div>

// Or set initial and animate to same values
<motion.div
  initial={{ opacity: 1, y: 0 }}
  animate={{ opacity: 1, y: 0 }}
>
```

---

## 🔍 SEO Customization

**File:** `index.html`

```html
<title>Your Company Name - Your Tagline</title>
<meta
  name="description"
  content="Your company description for search engines"
/>
<meta name="keywords" content="keyword1, keyword2, keyword3" />

<!-- Open Graph -->
<meta property="og:title" content="Your Company Name" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="/og-image.jpg" />

<!-- Twitter -->
<meta property="twitter:title" content="Your Company Name" />
<meta property="twitter:description" content="Your description" />
```

---

## 📊 Analytics Integration

### Google Analytics

**Add to `index.html` before `</head>`:**

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

---

## 🆘 Common Issues

### Issue: Colors not changing

**Solution:** Clear browser cache or hard refresh (Ctrl+Shift+R)

### Issue: Fonts not loading

**Solution:** Check Google Fonts URL is correct and accessible

### Issue: Images not showing

**Solution:** Ensure images are in `public/` folder and path starts with `/`

### Issue: Theme not persisting

**Solution:** Check browser allows localStorage

### Issue: Build fails after changes

**Solution:**

```bash
npm install
npm run build
```

---

## 📞 Need Help?

- Check the main README.md for setup instructions
- Review FEATURES.md for available features
- See DEPLOYMENT.md for hosting options
- Contact: contact@wbsconsultants.com
