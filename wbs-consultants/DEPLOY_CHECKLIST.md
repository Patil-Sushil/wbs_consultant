# 🚀 Netlify Deployment Checklist

Quick checklist to deploy WBS Consultants to Netlify without issues.

## ✅ Pre-Deployment Checklist

### 1. Environment Setup

- [ ] Firebase project created and configured
- [ ] EmailJS account set up with template
- [ ] All environment variables documented
- [ ] `.env` file configured locally (for testing)

### 2. Code Verification

- [ ] Build runs successfully: `npm run build`
- [ ] No console errors in browser
- [ ] All routes work locally
- [ ] Contact form submits successfully
- [ ] Admin login works
- [ ] Dark mode toggle works
- [ ] Animations are smooth

### 3. Files Check

- [ ] `netlify.toml` exists in root
- [ ] `public/_redirects` exists
- [ ] `public/.htaccess` exists
- [ ] `.gitignore` includes `.env`
- [ ] `dist` folder builds correctly

## 🌐 Netlify Deployment Steps

### Option A: Drag & Drop (5 minutes)

1. **Build the project**

   ```bash
   npm run build
   ```

   - [ ] Build completed successfully
   - [ ] `dist` folder created

2. **Deploy to Netlify**
   - [ ] Go to https://app.netlify.com/
   - [ ] Click "Add new site" → "Deploy manually"
   - [ ] Drag `dist` folder to upload area
   - [ ] Wait for deployment (1-2 minutes)

3. **Add Environment Variables**
   - [ ] Go to Site settings → Environment variables
   - [ ] Click "Add a variable"
   - [ ] Add each variable from `.env`:
     ```
     VITE_FIREBASE_API_KEY
     VITE_FIREBASE_AUTH_DOMAIN
     VITE_FIREBASE_PROJECT_ID
     VITE_FIREBASE_STORAGE_BUCKET
     VITE_FIREBASE_MESSAGING_SENDER_ID
     VITE_FIREBASE_APP_ID
     VITE_EMAILJS_SERVICE_ID
     VITE_EMAILJS_TEMPLATE_ID
     VITE_EMAILJS_PUBLIC_KEY
     VITE_ADMIN_EMAIL
     VITE_ADMIN_PASSWORD
     ```

4. **Rebuild with Environment Variables**
   - [ ] Go to Deploys tab
   - [ ] Click "Trigger deploy" → "Clear cache and deploy site"
   - [ ] Wait for rebuild (2-3 minutes)

### Option B: Git-Based (10 minutes)

1. **Push to Git**

   ```bash
   git init
   git add .
   git commit -m "Initial deployment"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

   - [ ] Code pushed to GitHub/GitLab/Bitbucket

2. **Connect to Netlify**
   - [ ] Go to https://app.netlify.com/
   - [ ] Click "Add new site" → "Import an existing project"
   - [ ] Choose Git provider
   - [ ] Authorize Netlify
   - [ ] Select repository

3. **Configure Build**
   - [ ] Build command: `npm run build`
   - [ ] Publish directory: `dist`
   - [ ] Node version: 18 (auto-detected from netlify.toml)

4. **Add Environment Variables**
   - [ ] Click "Add environment variables"
   - [ ] Add all variables (same as Option A, step 3)

5. **Deploy**
   - [ ] Click "Deploy site"
   - [ ] Wait for build (2-3 minutes)

## 🧪 Post-Deployment Testing

### Basic Functionality

- [ ] Site loads: `https://your-site.netlify.app/`
- [ ] Home page displays correctly
- [ ] All sections visible (Hero, About, Services, etc.)
- [ ] Animations work smoothly
- [ ] Dark mode toggle works

### Navigation Testing

- [ ] Click "Services" in navbar → scrolls to services
- [ ] Click "About" → scrolls to about
- [ ] Click "Contact" → scrolls to contact form
- [ ] Logo click → scrolls to top

### Route Testing

- [ ] Navigate to `/admin` → Admin login page loads
- [ ] Refresh page on `/admin` → NO 404 error ✅
- [ ] Navigate to `/admin/dashboard` → Redirects to login (if not authenticated)

### Contact Form

- [ ] Fill out form with test data
- [ ] Submit form
- [ ] Success message appears
- [ ] Check Firebase console → New entry exists
- [ ] Check email → Confirmation received

### Admin Dashboard

- [ ] Go to `/admin`
- [ ] Enter admin credentials
- [ ] Login successful → Redirects to dashboard
- [ ] Consultations list displays
- [ ] Export to Excel works
- [ ] Logout works

### Mobile Testing

- [ ] Open on mobile device
- [ ] Navbar hamburger menu works
- [ ] All sections responsive
- [ ] Forms work on mobile
- [ ] Animations smooth on mobile

### Performance Testing

- [ ] Run Lighthouse audit
- [ ] Performance score > 85
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

## 🔧 Troubleshooting

### If 404 Error on Refresh

1. Check `dist/_redirects` file exists
2. Check `netlify.toml` has redirect rules
3. Redeploy: "Trigger deploy" → "Clear cache and deploy site"

### If Environment Variables Not Working

1. Verify all variables start with `VITE_`
2. Check variables in Netlify dashboard
3. Trigger new deploy after adding variables
4. Check browser console for errors

### If Build Fails

1. Check build logs in Netlify
2. Test build locally: `npm run build`
3. Clear cache: `rm -rf node_modules dist`
4. Reinstall: `npm install`
5. Rebuild: `npm run build`

### If Firebase Not Connecting

1. Check Firebase config in environment variables
2. Verify Firebase project is active
3. Check Firestore rules allow writes
4. Check browser console for errors

## 📋 Final Verification

### Site Health

- [ ] Site is live and accessible
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled (green padlock)
- [ ] No console errors
- [ ] No broken links

### Functionality

- [ ] All animations work
- [ ] All forms submit
- [ ] All routes accessible
- [ ] Admin panel works
- [ ] Dark mode persists

### Performance

- [ ] Page loads in < 3 seconds
- [ ] Images load properly
- [ ] No layout shifts
- [ ] Smooth scrolling

### SEO

- [ ] Meta tags present
- [ ] Favicon displays
- [ ] Open Graph tags work
- [ ] Twitter cards work

## 🎉 Deployment Complete!

Your site is now live at: `https://your-site.netlify.app`

### Next Steps

1. [ ] Share URL with team
2. [ ] Set up custom domain (optional)
3. [ ] Configure Google Analytics
4. [ ] Submit to Google Search Console
5. [ ] Create social media posts
6. [ ] Monitor Firebase usage
7. [ ] Check EmailJS quota

## 📞 Support Resources

- **Netlify Docs**: https://docs.netlify.com/
- **Netlify Status**: https://www.netlifystatus.com/
- **Firebase Console**: https://console.firebase.google.com/
- **EmailJS Dashboard**: https://dashboard.emailjs.com/

---

**Deployment Date**: ******\_******

**Deployed By**: ******\_******

**Site URL**: ******\_******

**Notes**: ******\_******

---

✅ **All checks passed! Site is production-ready!**
