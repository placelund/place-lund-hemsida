# Deployment Guide - Place Lund Hotel Website

This guide covers deploying the Place Lund Hotel website to Vercel.

---

## Quick Start Deployment Status

✅ **Repository:** https://github.com/placelund/place-lund-hemsida
✅ **Build:** Successful (all TypeScript errors fixed)
✅ **Git:** Initialized and pushed to GitHub
🔧 **Vercel:** Project ID `prj_uzHWlVje8hcqXYm4ALM2QP5QgjU6`

---

## Deployment Options

### Option 1: Vercel Dashboard (Recommended)

The easiest way to deploy is through the Vercel web dashboard:

1. **Go to Vercel**
   - Visit: https://vercel.com/new
   - Sign in with your GitHub account

2. **Import Repository**
   - Click "Import Git Repository"
   - Select `placelund/place-lund-hemsida`

3. **Configure Project**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `next build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)

4. **Environment Variables** (Optional - can add later)
   ```
   RESEND_API_KEY=your_resend_api_key_here
   GOOGLE_SHEETS_PRIVATE_KEY=your_private_key_here
   GOOGLE_SHEETS_CLIENT_EMAIL=your_client_email_here
   GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_key_here
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Get your deployment URL

### Option 2: Vercel CLI

If you prefer command line deployment:

```bash
# Navigate to project
cd /path/to/place-lund-hotel

# Install Vercel CLI (if not installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

---

## Environment Variables Setup

### Required for Full Functionality

#### 1. Contact Form (Resend API)
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
```
- Get API key from: https://resend.com
- Used for contact form emails
- Without this: Contact form shows "service not configured" message

#### 2. Google Sheets (FAQ & Menu)
```
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here
```
- Follow `/GOOGLE_SHEETS_SETUP.md` for setup
- Used for FAQ and Menu data
- Without this: System uses fallback data

#### 3. Google Maps
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXX
```
- Get API key from: https://console.cloud.google.com/
- Enable Maps JavaScript API
- Without this: Map component won't display

### How to Add Environment Variables in Vercel

1. Go to your project dashboard
2. Click "Settings"
3. Click "Environment Variables"
4. Add each variable:
   - Name: `RESEND_API_KEY`
   - Value: `re_xxxxxxxxxxxxx`
   - Environments: Production, Preview, Development
5. Click "Save"
6. Redeploy for changes to take effect

---

## Deployment Checklist

### Before First Deployment

- [x] Git repository initialized
- [x] Code pushed to GitHub
- [x] Build runs successfully locally (`npm run build`)
- [x] TypeScript errors resolved
- [ ] Environment variables prepared (optional)
- [ ] Custom domain ready (if using)

### After Deployment

- [ ] Visit deployment URL and test
- [ ] Check all pages load correctly
- [ ] Test navigation
- [ ] Verify images display properly
- [ ] Test contact form (if API configured)
- [ ] Check FAQ page (will use fallback if no API)
- [ ] Check Menu page (will use fallback if no API)
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Add custom domain (if desired)

---

## Custom Domain Setup

### Adding a Custom Domain (e.g., placelund.se)

1. **In Vercel Dashboard:**
   - Go to project Settings
   - Click "Domains"
   - Enter your domain: `placelund.se` and `www.placelund.se`
   - Click "Add"

2. **DNS Configuration:**

   For apex domain (`placelund.se`):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   For www subdomain (`www.placelund.se`):
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS Propagation** (up to 48 hours)

4. **Automatic HTTPS** - Vercel provides free SSL certificate

---

## Continuous Deployment

Once connected to GitHub, Vercel automatically deploys:

- **Production:** Every push to `main` branch
- **Preview:** Every pull request gets a preview URL
- **Development:** Can be previewed locally

### To Deploy Updates:

```bash
# Make your changes
git add .
git commit -m "Your change description"
git push origin main
```

Vercel will automatically detect the push and deploy!

---

## Troubleshooting Common Issues

### Build Fails with TypeScript Errors

**Solution:** All TypeScript errors have been fixed. If new errors appear:
```bash
npm run build
# Fix any errors that appear
git add .
git commit -m "Fix TypeScript errors"
git push
```

### Images Not Loading

**Possible causes:**
1. Image files too large (Vercel free tier limits)
2. Incorrect image paths
3. Missing images

**Solution:**
- Check console for 404 errors
- Verify image paths in code match file names
- Consider optimizing large images

### Serverless Function Size Limit Exceeded

**Problem:** Functions are >300MB (mostly from images)

**Solutions:**
1. **Optimize Images:**
   - Compress images before uploading
   - Use Next.js Image Optimization
   - Consider CDN for large images

2. **Upgrade Vercel Plan:**
   - Pro plan allows larger functions
   - Better for production use

3. **External Image Hosting:**
   - Use Cloudinary, Imgix, or S3
   - Update image URLs in code

### Contact Form Not Working

**Cause:** `RESEND_API_KEY` not configured

**Solution:**
1. Sign up at https://resend.com
2. Get API key
3. Add to Vercel environment variables
4. Redeploy

### FAQ/Menu Shows Fallback Data

**Cause:** Google Sheets API not configured

**Solution:**
1. Follow `/GOOGLE_SHEETS_SETUP.md`
2. Add environment variables to Vercel
3. Redeploy

---

## Performance Optimization

### Image Optimization

1. **Compress Images:**
   ```bash
   # Using ImageOptim, TinyPNG, or similar tools
   # Target: <500KB per image
   ```

2. **Use Next.js Image Component:**
   - Already implemented in the codebase
   - Automatic optimization
   - Lazy loading enabled

### Caching Strategy

- **Static Pages:** Cached at edge
- **API Routes:** 5-minute revalidation (FAQ, Menu)
- **Images:** Automatic CDN caching

---

## Monitoring & Analytics

### Recommended Services

1. **Vercel Analytics** (Built-in)
   - Enable in project settings
   - Track page views, performance

2. **Google Analytics** (Optional)
   - Add tracking ID to layout
   - Monitor user behavior

3. **Error Tracking** (Optional)
   - Sentry integration
   - Real-time error alerts

---

## Backup & Recovery

### Database Backup

**Google Sheets Data:**
- Make regular copies of your FAQ/Menu spreadsheet
- Export as CSV for local backup

### Code Backup

**GitHub Repository:**
- Already serving as primary backup
- Consider private fork for extra security

### Image Backup

**Recommendation:**
- Keep original images in separate cloud storage
- Don't rely solely on git repository

---

## Support Resources

### Vercel Documentation
- https://vercel.com/docs
- https://nextjs.org/docs

### Place Lund Project
- **Repository:** https://github.com/placelund/place-lund-hemsida
- **Project ID:** `prj_uzHWlVje8hcqXYm4ALM2QP5QgjU6`

### Need Help?
- Vercel Support: support@vercel.com
- Next.js Discussions: https://github.com/vercel/next.js/discussions

---

## Deployment History

### 2025-01-10 - Initial Deployment
- ✅ Repository created
- ✅ Initial commit pushed
- ✅ Build successful locally
- 🔧 Vercel deployment in progress

---

**Last Updated:** 2025-01-10
**Maintainer:** Claude Code
**Version:** 1.0.0
