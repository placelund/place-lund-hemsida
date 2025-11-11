# Pre-Launch Checklist - Place Lund Hotel Website

Complete this checklist before launching the website to production.

---

## 🏗️ Build & Technical

- [x] Build completes without errors (`npm run build`)
- [x] TypeScript compilation successful
- [ ] No console errors in browser
- [ ] All routes load successfully
- [ ] Lint passes without warnings

---

## 📝 Content Verification

### Pages

- [ ] Home page - content accurate
- [ ] About page - content accurate
- [ ] Contact page - information correct
- [ ] Hotel rooms - all 7 room types accurate
- [ ] Hotel studios - specifications correct
- [ ] Apartments - descriptions accurate
- [ ] Conference rooms - pricing and capacity correct
- [ ] Restaurant - hours and menu correct
- [ ] Group stay - information complete
- [ ] GDPR - policy reviewed and approved

### Contact Information

- [ ] Phone number correct everywhere: `046 - 33 36 00`
- [ ] Email correct everywhere: `info@placelund.se`
- [ ] Address correct: `Margaretavägen 7, 222 40 Lund, Sweden`
- [ ] Phone links work: `tel:+46463336 00`
- [ ] Email links work: `mailto:info@placelund.se`

### Pricing

- [ ] Conference room pricing verified
- [ ] Catering pricing verified
- [ ] Room rates confirmed (if displayed)
- [ ] Currency display correct (SEK)

---

## 🖼️ Images & Media

### Image Loading

- [ ] Hero images load correctly
- [ ] All room photos display
- [ ] Apartment photos display
- [ ] Conference room photos display
- [ ] Restaurant photos display
- [ ] Gallery images load
- [ ] No broken image links (404s)

### Image Optimization

- [ ] Large images compressed (<500KB recommended)
- [ ] Images use Next.js Image component
- [ ] Alt text present on all images
- [ ] Images responsive on mobile

### PDF Flyers

- [ ] Sofia flyer opens correctly
- [ ] Margaretha flyer opens correctly
- [ ] Sankt Hans flyer opens correctly
- [ ] Flyers are Version 3 (if available)

---

## 🔧 Functionality

### Navigation

- [ ] Main navigation works on desktop
- [ ] Mobile menu opens and closes
- [ ] All navigation links work
- [ ] Footer links work
- [ ] Breadcrumbs work (if implemented)

### Forms

- [ ] Contact form validates correctly
- [ ] GDPR consent checkbox works
- [ ] Form submission shows success message
- [ ] Error handling works
- [ ] Email delivery confirmed (if API configured)

### Interactive Elements

- [ ] Gallery lightbox/modal works (if implemented)
- [ ] FAQ accordion expands/collapses
- [ ] Room detail modals work (if implemented)
- [ ] Back to top button works (if implemented)

---

## 📱 Responsive Design

### Mobile (320px - 767px)

- [ ] Home page displays correctly
- [ ] Navigation menu works
- [ ] Images scale appropriately
- [ ] Text is readable
- [ ] Buttons are tap-friendly
- [ ] Forms are usable

### Tablet (768px - 1023px)

- [ ] Layout adapts correctly
- [ ] Navigation works
- [ ] Images display well
- [ ] Content is readable

### Desktop (1024px+)

- [ ] Full layout displays correctly
- [ ] Navigation is visible
- [ ] Images use full quality
- [ ] Content is well-spaced

---

## 🌐 Browser Compatibility

Test on:

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## ♿ Accessibility

### WCAG 2.1 AA Compliance

- [ ] All images have alt text
- [ ] Color contrast meets standards
- [ ] Forms have proper labels
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Headings properly structured (H1, H2, H3)
- [ ] Links have descriptive text
- [ ] No flashing content

### Screen Reader Testing

- [ ] Test with screen reader (optional but recommended)
- [ ] Landmark regions properly labeled
- [ ] Skip to content link (if implemented)

---

## 🔍 SEO

### Meta Tags

- [ ] Page titles unique and descriptive (<60 characters)
- [ ] Meta descriptions present (<160 characters)
- [ ] Open Graph tags for social sharing
- [ ] Canonical URLs set
- [ ] Language attribute set (`lang="sv"` or `lang="en"`)

### Technical SEO

- [ ] sitemap.xml generated
- [ ] robots.txt configured
- [ ] favicon.ico present
- [ ] 404 page works
- [ ] No duplicate content
- [ ] URLs are SEO-friendly

### Schema Markup

- [ ] LocalBusiness schema
- [ ] Hotel schema
- [ ] Restaurant schema
- [ ] Event venue schema (conference)

---

## 🚀 Performance

### Core Web Vitals

- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1

### Optimization

- [ ] Images optimized and compressed
- [ ] Fonts optimized
- [ ] CSS minified
- [ ] JavaScript minified
- [ ] Lazy loading implemented

### Testing Tools

- [ ] Google PageSpeed Insights score > 90
- [ ] Lighthouse audit passed
- [ ] GTmetrix grade A/B

---

## 🔒 Security

### HTTPS

- [ ] SSL certificate installed
- [ ] HTTPS enforced
- [ ] Mixed content warnings resolved

### Forms

- [ ] CSRF protection enabled
- [ ] Input validation implemented
- [ ] Rate limiting on contact form
- [ ] GDPR consent required

### Environment Variables

- [ ] API keys not exposed in client code
- [ ] .env.local in .gitignore
- [ ] Production keys different from development

---

## 🗺️ APIs & Integrations

### Google Maps

- [ ] API key configured (or placeholder acceptable)
- [ ] Map displays correctly
- [ ] Marker shows hotel location
- [ ] Info window works

### Contact Form (Resend)

- [ ] API key configured (or acceptable to launch with fallback)
- [ ] Test email sends successfully
- [ ] Error handling works
- [ ] Rate limiting functional

### Google Sheets (FAQ/Menu)

- [ ] Credentials configured (or acceptable with fallback data)
- [ ] FAQ pulls from sheet
- [ ] Menu pulls from sheet
- [ ] Fallback data works if API fails

---

## 📊 Analytics (Optional)

- [ ] Google Analytics installed (if desired)
- [ ] Vercel Analytics enabled
- [ ] Cookie consent banner (if using cookies)

---

## 🌍 Localization

### Language

- [ ] Swedish content accurate
- [ ] English translations correct (if applicable)
- [ ] Currency displays correctly (SEK)
- [ ] Date formats appropriate
- [ ] Phone number format correct

---

## ⚙️ Deployment

### Vercel Configuration

- [ ] Custom domain connected (if applicable)
- [ ] DNS records configured
- [ ] Environment variables set
- [ ] Build completes successfully
- [ ] No deployment errors

### Post-Deployment

- [ ] Production URL accessible
- [ ] All pages load on production
- [ ] Images load from production
- [ ] Forms work on production
- [ ] APIs work on production (if configured)

---

## 📞 Emergency Contacts

### If Issues Arise

- **Technical Support:** [Your contact]
- **Content Updates:** info@placelund.se
- **Hosting (Vercel):** support@vercel.com

---

## ✅ Final Sign-Off

### Stakeholder Approval

- [ ] Hotel owner reviewed and approved
- [ ] Content accuracy confirmed
- [ ] Pricing verified
- [ ] Contact information confirmed
- [ ] Images approved

### Launch Readiness

- [ ] All critical items checked
- [ ] Known issues documented
- [ ] Rollback plan in place (if needed)
- [ ] Launch date scheduled

---

## 🎉 Post-Launch Tasks

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google My Business (if not done)
- [ ] Monitor analytics for first 48 hours
- [ ] Check for 404 errors
- [ ] Monitor performance metrics
- [ ] Gather user feedback

---

**Checklist Version:** 1.0
**Last Updated:** 2025-01-10
**Status:** Ready for pre-launch review

**Notes:** Items marked optional can be completed after initial launch if time-sensitive.
