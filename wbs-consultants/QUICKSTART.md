# 🚀 Quick Start Guide - WBS Consultants Website

Get your website up and running in 5 minutes!

## ⚡ Super Quick Start

```bash
# 1. Navigate to project
cd wbs-consultants

# 2. Install dependencies (if not done)
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit: http://localhost:5173
```

That's it! Your website is now running locally. 🎉

---

## 📋 What You Get

✅ **Fully functional website** with:

- Dark/Light theme toggle
- 11 service sections
- Animated statistics
- Client testimonials carousel
- Contact form
- Responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Professional animations

---

## 🎨 First Customizations (5 minutes)

### 1. Update Company Name & Logo

**File:** `src/components/layout/Navbar.jsx` (Line 50)

```javascript
// Change "WBS" to your initials
<span className="text-white font-bold text-xl">ABC</span>

// Change "Consultants" to your company name
<span className="text-xl font-display font-bold">
  Your Company
</span>
```

### 2. Update Contact Information

**File:** `src/components/sections/ContactCTA.jsx` (Lines 60-80)

```javascript
// Update email
<a href="mailto:your-email@company.com">
  your-email@company.com
</a>

// Update phone
<a href="tel:+91XXXXXXXXXX">
  +91 XXXXX XXXXX
</a>

// Update locations
<p className="text-white">Your City | Your City | Your City</p>
```

### 3. Update Hero Section

**File:** `src/components/sections/Hero.jsx` (Lines 30-50)

```javascript
// Update headline
<span className="gradient-text">Your First Line.</span>
<span className="gradient-text">Your Second Line.</span>
<span className="gradient-text">Your Third Line.</span>

// Update subheadline
<p>Your company tagline here.</p>
```

**Save files and see changes instantly!** ✨

---

## 🎯 Next Steps

### Customize Content (10 minutes)

**File:** `src/data/content.js`

This single file contains:

- All services
- Statistics
- Testimonials
- Why Choose Us points

Update the values to match your business!

### Change Colors (5 minutes)

**File:** `tailwind.config.js`

```javascript
colors: {
  dark: {
    accent: '#00D9A3', // Change to your brand color
  },
  light: {
    accent: '#059669', // Change to your brand color
  }
}
```

### Add Your Images (5 minutes)

1. Create folder: `public/images/`
2. Add your images there
3. Update image paths in components

---

## 📱 Test on Mobile

1. Find your local IP:

```bash
# Windows
ipconfig

# Mac/Linux
ifconfig
```

2. Start dev server with host flag:

```bash
npm run dev -- --host
```

3. Open on mobile: `http://YOUR-IP:5173`

---

## 🚀 Deploy to Production (10 minutes)

### Option 1: Vercel (Easiest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow prompts, and you're live! 🎉

### Option 2: Netlify

```bash
# Build
npm run build

# Go to netlify.com/drop
# Drag the 'dist' folder
```

Your site is live in seconds! 🚀

---

## 📚 Learn More

- **Full customization:** See `CUSTOMIZATION.md`
- **All features:** See `FEATURES.md`
- **Deployment options:** See `DEPLOYMENT.md`
- **Project details:** See `README.md`

---

## 🆘 Troubleshooting

### Port already in use?

```bash
# Kill process on port 5173
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5173 | xargs kill
```

### Dependencies not installing?

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Changes not showing?

- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache
- Restart dev server

---

## ✅ Checklist Before Going Live

- [ ] Update company name and logo
- [ ] Update contact information (email, phone, address)
- [ ] Customize hero section text
- [ ] Update services in `content.js`
- [ ] Add real testimonials
- [ ] Replace placeholder images
- [ ] Update statistics
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify theme toggle works
- [ ] Test in different browsers
- [ ] Update SEO meta tags in `index.html`
- [ ] Add favicon
- [ ] Build and deploy!

---

## 🎉 You're Ready!

Your professional consulting website is ready to impress clients!

**Need help?** Check the other documentation files or contact support.

**Happy building!** 🚀
