# Netlify Deployment Guide - WBS Consultants

Complete guide to deploy your WBS Consultants website to Netlify with proper configuration for SPA routing.

## 📋 Prerequisites

Before deploying, ensure you have:

- ✅ Netlify account (free tier works fine)
- ✅ GitHub/GitLab/Bitbucket repository (optional, for continuous deployment)
- ✅ Firebase project configured
- ✅ EmailJS account set up
- ✅ Environment variables ready

## 🚀 Deployment Methods

### Method 1: Drag & Drop (Quickest)

#### Step 1: Build the Project

```bash
cd wbs-consultants
npm install
npm run build
```

#### Step 2: Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the `dist` folder
4. Wait for deployment to complete

#### Step 3: Configure Environment Variables

1. Go to Site settings → Environment variables
2. Add all variables from your `.env` file:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_ADMIN_EMAIL=admin@wbsconsultants.com
   VITE_ADMIN_PASSWORD=your_secure_password
   ```

#### Step 4: Rebuild with Environment Variables

1. Go to Deploys tab
2. Click "Trigger deploy" → "Deploy site"

---

### Method 2: Git-Based Deployment (Recommended)

#### Step 1: Push to Git Repository

```bash
cd wbs-consultants
git init
git add .
git commit -m "Initial commit - WBS Consultants website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

#### Step 2: Connect to Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Authorize Netlify to access your repositories
5. Select your repository

#### Step 3: Configure Build Settings

Netlify should auto-detect these settings from `netlify.toml`:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

If not auto-detected, enter them manually.

#### Step 4: Add Environment Variables

Before deploying, add environment variables:

1. Click "Add environment variables"
2. Add all variables from your `.env` file (see Method 1, Step 3)

#### Step 5: Deploy

1. Click "Deploy site"
2. Wait for build to complete (2-3 minutes)
3. Your site will be live at `https://random-name.netlify.app`

---

### Method 3: Netlify CLI (For Developers)

#### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify

```bash
netlify login
```

#### Step 3: Initialize Netlify

```bash
cd wbs-consultants
netlify init
```

Follow the prompts:

- Create & configure a new site
- Choose your team
- Enter site name (optional)
- Build command: `npm run build`
- Publish directory: `dist`

#### Step 4: Set Environment Variables

```bash
netlify env:set VITE_FIREBASE_API_KEY "your_api_key"
netlify env:set VITE_FIREBASE_AUTH_DOMAIN "your_auth_domain"
netlify env:set VITE_FIREBASE_PROJECT_ID "your_project_id"
netlify env:set VITE_FIREBASE_STORAGE_BUCKET "your_storage_bucket"
netlify env:set VITE_FIREBASE_MESSAGING_SENDER_ID "your_sender_id"
netlify env:set VITE_FIREBASE_APP_ID "your_app_id"
netlify env:set VITE_EMAILJS_SERVICE_ID "your_service_id"
netlify env:set VITE_EMAILJS_TEMPLATE_ID "your_template_id"
netlify env:set VITE_EMAILJS_PUBLIC_KEY "your_public_key"
netlify env:set VITE_ADMIN_EMAIL "admin@wbsconsultants.com"
netlify env:set VITE_ADMIN_PASSWORD "your_secure_password"
```

#### Step 5: Deploy

```bash
# Deploy to production
netlify deploy --prod

# Or deploy to preview first
netlify deploy
```

---

## 🔧 Configuration Files Explained

### 1. `netlify.toml`

Main Netlify configuration file:

- Build settings
- Redirect rules for SPA
- Security headers
- Cache control

### 2. `public/_redirects`

Handles client-side routing:

- Redirects all routes to `index.html`
- Prevents 404 errors on page refresh
- Supports React Router

### 3. `public/.htaccess`

Backup for Apache servers:

- Same functionality as `_redirects`
- Used if deploying to Apache server
- Not needed for Netlify but good to have

---

## 🔐 Security Configuration

### Firebase Security Rules

Update your Firestore rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Consultations collection
    match /consultations/{document=**} {
      // Allow read/write only for authenticated users
      allow read, write: if request.auth != null;

      // Allow create for anyone (contact form)
      allow create: if true;
    }
  }
}
```

### Firebase Authentication

Enable Email/Password authentication:

1. Go to Firebase Console
2. Authentication → Sign-in method
3. Enable Email/Password
4. Add your admin email

---

## 🌐 Custom Domain Setup

### Step 1: Add Custom Domain

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `wbsconsultants.com`)

### Step 2: Configure DNS

Add these records to your domain provider:

**For Apex Domain (wbsconsultants.com):**

```
Type: A
Name: @
Value: 75.2.60.5
```

**For WWW Subdomain:**

```
Type: CNAME
Name: www
Value: your-site.netlify.app
```

### Step 3: Enable HTTPS

1. Netlify automatically provisions SSL certificate
2. Wait 24-48 hours for DNS propagation
3. Enable "Force HTTPS" in domain settings

---

## 🧪 Testing After Deployment

### 1. Test All Routes

- ✅ Home page: `https://your-site.netlify.app/`
- ✅ Admin login: `https://your-site.netlify.app/admin`
- ✅ Admin dashboard: `https://your-site.netlify.app/admin/dashboard`

### 2. Test Page Refresh

- Navigate to `/admin`
- Refresh the page (F5)
- Should NOT show 404 error

### 3. Test Contact Form

- Fill out the contact form
- Submit
- Check Firebase console for new entry
- Check email for notification

### 4. Test Admin Dashboard

- Login with admin credentials
- View consultations
- Export to Excel
- Logout

### 5. Test Dark Mode

- Toggle dark mode
- Refresh page
- Theme should persist

### 6. Test Responsive Design

- Open on mobile device
- Test all sections
- Check animations
- Test navigation

---

## 🐛 Troubleshooting

### Issue: 404 Error on Refresh

**Solution:**

- Check `_redirects` file exists in `public` folder
- Verify `netlify.toml` has redirect rules
- Rebuild and redeploy

### Issue: Environment Variables Not Working

**Solution:**

- Check variable names start with `VITE_`
- Verify variables are set in Netlify dashboard
- Trigger a new deploy after adding variables

### Issue: Firebase Connection Failed

**Solution:**

- Verify Firebase config in `.env`
- Check Firebase project is active
- Ensure Firestore is enabled
- Check browser console for errors

### Issue: Build Failed

**Solution:**

```bash
# Clear cache and rebuild locally
rm -rf node_modules package-lock.json dist
npm install
npm run build

# If successful, push to Git
git add .
git commit -m "Fix build"
git push
```

### Issue: Animations Not Working

**Solution:**

- Check Framer Motion is installed
- Verify no console errors
- Test in different browsers
- Clear browser cache

---

## 📊 Performance Optimization

### 1. Enable Asset Optimization

In Netlify dashboard:

- Go to Site settings → Build & deploy → Post processing
- Enable "Bundle CSS"
- Enable "Minify CSS"
- Enable "Minify JS"
- Enable "Compress images"

### 2. Enable Netlify Analytics (Optional)

- Go to Site settings → Analytics
- Enable Netlify Analytics ($9/month)
- Or use Google Analytics (free)

### 3. Configure Caching

Already configured in `netlify.toml`:

- Static assets: 1 year cache
- HTML: No cache (always fresh)

---

## 🔄 Continuous Deployment

### Automatic Deploys

With Git-based deployment:

- Push to `main` branch → Auto deploy to production
- Push to other branches → Auto deploy to preview

### Deploy Previews

- Every pull request gets a preview URL
- Test changes before merging
- Share with team for review

### Deploy Notifications

Set up notifications:

1. Go to Site settings → Build & deploy → Deploy notifications
2. Add Slack, email, or webhook notifications
3. Get notified on deploy success/failure

---

## 📝 Post-Deployment Checklist

- [ ] Site is live and accessible
- [ ] All routes work (no 404 errors)
- [ ] Contact form submits successfully
- [ ] Admin login works
- [ ] Admin dashboard accessible
- [ ] Dark mode toggle works
- [ ] Animations are smooth
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] Custom domain configured (if applicable)
- [ ] Firebase connected
- [ ] EmailJS working
- [ ] SEO meta tags present
- [ ] Favicon displays correctly
- [ ] Performance score > 90 (Lighthouse)

---

## 🎉 Success!

Your WBS Consultants website is now live on Netlify!

### Next Steps

1. Share the URL with stakeholders
2. Set up Google Analytics
3. Submit to Google Search Console
4. Create social media posts
5. Monitor Firebase usage
6. Check EmailJS quota

### Support

- Netlify Docs: https://docs.netlify.com/
- Netlify Community: https://answers.netlify.com/
- Firebase Docs: https://firebase.google.com/docs

---

**Deployed with ❤️ on Netlify**

_Last Updated: April 2026_
