# Deployment Guide - WBS Consultants Website

## 📦 Building for Production

Before deploying, create an optimized production build:

```bash
npm run build
```

This will:

- Compile and optimize all React components
- Minify JavaScript and CSS
- Optimize images and assets
- Generate source maps
- Create a `dist` folder with production-ready files

## 🚀 Deployment Options

### 1. Vercel (Recommended)

**Why Vercel?**

- Zero configuration for Vite projects
- Automatic HTTPS
- Global CDN
- Instant deployments
- Free tier available

**Steps:**

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
cd wbs-consultants
vercel
```

3. Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: wbs-consultants
   - Directory: ./
   - Override settings: No

4. Your site will be live at: `https://wbs-consultants.vercel.app`

**Continuous Deployment:**

- Connect your GitHub repository to Vercel
- Automatic deployments on every push to main branch

---

### 2. Netlify

**Why Netlify?**

- Simple drag-and-drop deployment
- Automatic HTTPS
- Form handling
- Free tier available

**Option A: Drag and Drop**

1. Build the project:

```bash
npm run build
```

2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder onto the page
4. Your site is live!

**Option B: Netlify CLI**

1. Install Netlify CLI:

```bash
npm install -g netlify-cli
```

2. Deploy:

```bash
cd wbs-consultants
netlify deploy --prod
```

3. Follow the prompts and select the `dist` folder

**Continuous Deployment:**

- Connect your GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`

---

### 3. GitHub Pages

**Steps:**

1. Install gh-pages:

```bash
npm install -D gh-pages
```

2. Add to `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/wbs-consultants",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: "/wbs-consultants/",
});
```

4. Deploy:

```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings:
   - Settings → Pages
   - Source: gh-pages branch
   - Save

---

### 4. AWS S3 + CloudFront

**For enterprise deployments with custom domain**

**Steps:**

1. Build the project:

```bash
npm run build
```

2. Create S3 bucket:

```bash
aws s3 mb s3://wbs-consultants-website
```

3. Upload files:

```bash
aws s3 sync dist/ s3://wbs-consultants-website --delete
```

4. Configure bucket for static hosting:

```bash
aws s3 website s3://wbs-consultants-website --index-document index.html
```

5. Set up CloudFront distribution for HTTPS and CDN

6. Configure Route 53 for custom domain

---

### 5. Firebase Hosting

**Steps:**

1. Install Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Login:

```bash
firebase login
```

3. Initialize:

```bash
firebase init hosting
```

4. Configure:
   - Public directory: `dist`
   - Single-page app: Yes
   - GitHub integration: Optional

5. Build and deploy:

```bash
npm run build
firebase deploy
```

---

### 6. Docker + Any Cloud Provider

**Dockerfile:**

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf:**

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Build and run:**

```bash
docker build -t wbs-consultants .
docker run -p 80:80 wbs-consultants
```

---

## 🔧 Environment Variables

If you need environment variables:

1. Create `.env` file:

```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=contact@wbsconsultants.com
```

2. Access in code:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. For production, set environment variables in your hosting platform

---

## 🌐 Custom Domain Setup

### Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify

1. Go to Domain Settings
2. Add custom domain
3. Configure DNS or use Netlify DNS

### General DNS Configuration

```
Type: A
Name: @
Value: [Your hosting IP]

Type: CNAME
Name: www
Value: [Your hosting domain]
```

---

## ✅ Pre-Deployment Checklist

- [ ] Update contact information (email, phone, address)
- [ ] Replace placeholder images with actual photos
- [ ] Test all links and navigation
- [ ] Verify form submission works
- [ ] Test on multiple devices and browsers
- [ ] Check mobile responsiveness
- [ ] Verify theme toggle works
- [ ] Test all animations
- [ ] Check console for errors
- [ ] Optimize images (WebP format)
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Configure SEO meta tags
- [ ] Set up favicon
- [ ] Test page load speed
- [ ] Enable HTTPS
- [ ] Set up monitoring/error tracking

---

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images:**

```bash
npm install -D vite-plugin-imagemin
```

2. **Enable Compression:**

```bash
npm install -D vite-plugin-compression
```

3. **Analyze Bundle:**

```bash
npm install -D rollup-plugin-visualizer
npm run build
```

### After Deployment

1. Test with [Google PageSpeed Insights](https://pagespeed.web.dev/)
2. Check [GTmetrix](https://gtmetrix.com/)
3. Verify [WebPageTest](https://www.webpagetest.org/)

---

## 🔒 Security Best Practices

1. **HTTPS Only**: Always use HTTPS in production
2. **Content Security Policy**: Add CSP headers
3. **CORS Configuration**: Restrict API access
4. **Rate Limiting**: Implement on contact form
5. **Input Validation**: Sanitize all user inputs
6. **Regular Updates**: Keep dependencies updated

---

## 📈 Monitoring & Analytics

### Google Analytics

Add to `index.html`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

### Error Tracking

Consider using:

- Sentry
- LogRocket
- Rollbar

---

## 🆘 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Blank Page After Deployment

- Check browser console for errors
- Verify `base` path in `vite.config.ts`
- Ensure all assets are loading correctly

### Theme Not Persisting

- Check localStorage is enabled
- Verify no CSP blocking localStorage

### Forms Not Working

- Check CORS configuration
- Verify API endpoints
- Test form validation

---

## 📞 Support

For deployment issues:

- Check [Vite Documentation](https://vitejs.dev/)
- Review hosting platform docs
- Contact: contact@wbsconsultants.com
