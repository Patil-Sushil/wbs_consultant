# ⚡ Quick Deploy to Netlify

Ultra-fast deployment guide - 5 minutes to live site!

## 🚀 Fastest Method: Drag & Drop

### Step 1: Build (1 minute)

```bash
cd wbs-consultants
npm run build
```

### Step 2: Deploy (2 minutes)

1. Go to https://app.netlify.com/drop
2. Drag the `dist` folder
3. Done! Site is live 🎉

### Step 3: Add Environment Variables (2 minutes)

1. Click on your site
2. Site settings → Environment variables → Add variables
3. Copy from your `.env` file:

```env
VITE_FIREBASE_API_KEY=your_value
VITE_FIREBASE_AUTH_DOMAIN=your_value
VITE_FIREBASE_PROJECT_ID=your_value
VITE_FIREBASE_STORAGE_BUCKET=your_value
VITE_FIREBASE_MESSAGING_SENDER_ID=your_value
VITE_FIREBASE_APP_ID=your_value
VITE_EMAILJS_SERVICE_ID=your_value
VITE_EMAILJS_TEMPLATE_ID=your_value
VITE_EMAILJS_PUBLIC_KEY=your_value
VITE_ADMIN_EMAIL=your_value
VITE_ADMIN_PASSWORD=your_value
```

### Step 4: Redeploy with Variables

1. Deploys tab → Trigger deploy → Clear cache and deploy site
2. Wait 2 minutes
3. ✅ Done!

## 🧪 Quick Test

Visit these URLs:

- `https://your-site.netlify.app/` - Home page
- `https://your-site.netlify.app/admin` - Admin login
- Refresh the page - Should NOT show 404 ✅

## 🎯 That's It!

Your site is live with:

- ✅ SPA routing (no 404 on refresh)
- ✅ All animations working
- ✅ Contact form connected
- ✅ Admin dashboard accessible
- ✅ Dark mode enabled
- ✅ Mobile responsive

## 📝 Important Files

These files make it work:

- `netlify.toml` - Build configuration
- `public/_redirects` - SPA routing
- `public/.htaccess` - Apache backup

## 🔗 Useful Links

- **Your Site**: Check Netlify dashboard
- **Netlify Dashboard**: https://app.netlify.com/
- **Firebase Console**: https://console.firebase.google.com/
- **EmailJS Dashboard**: https://dashboard.emailjs.com/

---

**Need more details?** See `NETLIFY_DEPLOYMENT.md`

**Having issues?** See `DEPLOY_CHECKLIST.md`
