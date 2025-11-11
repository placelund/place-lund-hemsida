# Manual Tasks - Place Lund Hotel Website

Tasks that require manual intervention and cannot be automated. Complete these alongside automated deployment tasks.

---

## 🚨 Critical Manual Tasks (Before Launch)

### 1. Owner Content Review
**Who:** Hotel Owner
**When:** Before launch
**What:**
- [ ] Review all room descriptions and specifications
- [ ] Verify all pricing information is current
- [ ] Confirm contact information (phone, email, address)
- [ ] Approve all photos used on website
- [ ] Verify restaurant hours (11 AM - 9 PM)
- [ ] Confirm conference room capacities and pricing
- [ ] Check GDPR policy is acceptable

**How:**
1. Send owner a preview link (Vercel preview URL)
2. Provide checklist of pages to review
3. Get written approval before production launch

### 2. Image Compression
**Who:** Developer/Designer
**When:** Before launch (High Priority)
**What:**
- [ ] Compress `hotel-studio-placeholder.png` (currently 8.1MB → target <500KB)
- [ ] Compress other placeholder images >3MB
- [ ] Optimize hero slideshow images
- [ ] Check all images load quickly on mobile

**Tools:**
- TinyPNG (https://tinypng.com)
- ImageOptim (Mac app)
- Squoosh (https://squoosh.app)

**How:**
1. Download original images as backup
2. Compress using tools above
3. Replace in `/public/images/` folders
4. Test website to ensure quality acceptable
5. Commit and push changes

### 3. Content Discrepancy Resolution
**Who:** Hotel Owner + Developer
**When:** Before launch
**What:**
- [ ] **One-Bedroom Apartment Page:** Currently shows two-bedroom content
  - Verify: Do you have separate one-bedroom apartments?
  - If yes: Update page with correct one-bedroom info
  - If no: Rename page to `/apartments/two-bedroom`
- [ ] **Apartment Images:** Confirm which images are one-bedroom vs two-bedroom
- [ ] **Studio Specifications:** Verify exact size (currently listed as ~25-30m²)

**Decision Needed:**
```
Option A: Have both one-bedroom and two-bedroom apartments
  → Update /apartments/one-bedroom with correct content
  → Ensure correct images in each folder

Option B: Only have two-bedroom apartments
  → Rename /apartments/one-bedroom to /apartments/two-bedroom
  → Update navigation and links
```

---

## 🔧 Configuration Tasks (Phase 6 - APIs)

### 4. Resend API Setup (Contact Form)
**Who:** Developer with email access
**When:** After launch acceptable, but needed for contact form
**What:**
- [ ] Sign up at https://resend.com
- [ ] Get API key
- [ ] Verify `info@placelund.se` domain
- [ ] Add `RESEND_API_KEY` to Vercel environment variables
- [ ] Test contact form sends emails
- [ ] Verify emails arrive at info@placelund.se

**Without this:** Contact form shows "service not configured" message

### 5. Google Sheets API Setup (FAQ & Menu)
**Who:** Developer with Google account access
**When:** After launch acceptable, uses fallback data until configured
**What:**
- [ ] Create Google Sheets for FAQ
- [ ] Create Google Sheets for Menu
- [ ] Follow `/GOOGLE_SHEETS_SETUP.md` instructions
- [ ] Get service account credentials
- [ ] Add environment variables to Vercel
- [ ] Test FAQ pulls from sheet
- [ ] Test Menu pulls from sheet

**Without this:** Website uses fallback FAQ and Menu data (already acceptable)

### 6. Google Maps API Setup
**Who:** Developer with Google Cloud access
**When:** After launch acceptable, map placeholder shown until configured
**What:**
- [ ] Create Google Cloud project
- [ ] Enable Maps JavaScript API
- [ ] Get API key
- [ ] Restrict API key to website domain
- [ ] Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to Vercel
- [ ] Test map displays correctly
- [ ] Verify hotel marker shows

**Without this:** Map component shows placeholder message

---

## 📸 Image Tasks

### 7. Restaurant Image Renaming
**Who:** Developer
**When:** Before or shortly after launch
**What:**
- [ ] Rename `IMG_7497.jpeg` → `restaurant-place-lund-hotel-1.jpeg`
- [ ] Rename `IMG_7505.jpeg` → `restaurant-place-lund-hotel-2.jpeg`
- [ ] Rename `IMG_7508.jpeg` → `restaurant-place-lund-hotel-3.jpeg`
- [ ] Rename `IMG_7518.jpeg` → `restaurant-place-lund-hotel-4.jpeg`
- [ ] Update references in code if any
- [ ] Consider adding more restaurant photos

### 8. Hero Slideshow Image Selection & Naming
**Who:** Hotel Owner + Developer
**When:** Phase 2 (Hero Slideshow Implementation)
**What:**
- [ ] Select best 3-5 images from available hero photos
- [ ] Rename to descriptive names:
  - `hero-hotel-exterior-1.jpeg`
  - `hero-hotel-lobby-1.jpeg`
  - `hero-garden-view-1.jpeg`
  - etc.
- [ ] Determine rotation interval (5 seconds? 7 seconds?)
- [ ] Decide on transition effect

### 9. PDF Flyer Updates
**Who:** Hotel Owner
**When:** When Version 3 available
**What:**
- [ ] Obtain Version 3 flyers from designer
- [ ] Replace existing PDFs in `/public/flyers/`
- [ ] Verify all information current (pricing, capacity, features)
- [ ] Test PDFs open correctly in browsers

**Current Flyers:**
- Sofia - Flyer - P L A C E  - Sofia (1).pdf
- Margaretha - Flyer - P L A C E  - Margaretha (1).pdf
- Sankt Hans - Flyer - P L A C E  - Sankt Hans (1).pdf

### 10. Additional Photography (Optional)
**Who:** Hotel Owner or Professional Photographer
**When:** After launch, as budget allows
**What:**
Consider professional photos of:
- [ ] Restaurant breakfast buffet in action
- [ ] Bar with drinks and ambiance
- [ ] Conference rooms in use (meetings in progress)
- [ ] Garden area (especially in summer)
- [ ] More Double Deluxe photos showing both rooms
- [ ] Hotel studios showing kitchenette clearly
- [ ] Group activities or events

---

## 🌐 Domain & Hosting

### 11. Custom Domain Setup
**Who:** Domain Administrator + Developer
**When:** After initial deployment verified
**What:**
- [ ] Determine if using `placelund.se` or subdomain
- [ ] Access domain registrar (Loopia, One.com, etc.)
- [ ] Add DNS records per `/DEPLOYMENT.md` instructions
- [ ] Verify in Vercel dashboard
- [ ] Wait for DNS propagation (up to 48 hours)
- [ ] Test domain works
- [ ] Verify HTTPS certificate issued

**Records Needed:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 12. Email Forwarding Configuration
**Who:** Domain Administrator
**When:** Simultaneously with domain setup
**What:**
- [ ] Ensure `info@placelund.se` is configured
- [ ] Test sending email to info@placelund.se
- [ ] Verify emails received by appropriate staff
- [ ] Set up auto-reply if desired
- [ ] Configure spam filters

---

## 📊 Analytics & Monitoring

### 13. Google Analytics Setup (Optional)
**Who:** Developer or Marketing
**When:** At launch or shortly after
**What:**
- [ ] Create Google Analytics 4 property
- [ ] Get tracking ID
- [ ] Add tracking code to website
- [ ] Set up goals/conversions
- [ ] Test tracking works
- [ ] Share access with stakeholders

### 14. Google Search Console
**Who:** Developer or SEO Manager
**When:** Within first week of launch
**What:**
- [ ] Add property in Google Search Console
- [ ] Verify ownership
- [ ] Submit sitemap.xml
- [ ] Monitor indexing status
- [ ] Check for crawl errors
- [ ] Set up email notifications

### 15. Google My Business
**Who:** Hotel Owner
**When:** If not already done
**What:**
- [ ] Claim/verify Google My Business listing
- [ ] Ensure all information matches website
- [ ] Add photos from website
- [ ] Link website URL
- [ ] Respond to reviews
- [ ] Update business hours

---

## 🔐 Security & Legal

### 16. SSL Certificate Verification
**Who:** Developer
**When:** Immediately after domain setup
**What:**
- [ ] Verify HTTPS works
- [ ] Check certificate is valid
- [ ] Ensure no mixed content warnings
- [ ] Test HTTPS redirect works (http → https)

### 17. Cookie Consent (If Needed)
**Who:** Developer + Legal Review
**When:** If using tracking cookies
**What:**
- [ ] Determine if cookie banner needed (Analytics, etc.)
- [ ] Implement cookie consent solution
- [ ] Update GDPR policy if needed
- [ ] Test consent flow

---

## 🎨 Design Phase (Phase 3)

### 18. Design Consistency Audit
**Who:** Designer + Developer
**When:** Phase 3
**What:**
- [ ] Review all pages for consistent colors
- [ ] Check typography consistency
- [ ] Verify button styles uniform
- [ ] Ensure spacing consistent
- [ ] Review mobile layouts
- [ ] Fix any design inconsistencies

---

## 📱 Testing

### 19. Cross-Browser Testing
**Who:** QA or Developer
**When:** Before launch
**What:**
Test full website on:
- [ ] Chrome (Windows & Mac)
- [ ] Firefox (Windows & Mac)
- [ ] Safari (Mac & iOS)
- [ ] Edge (Windows)
- [ ] Chrome Mobile (Android)

Document any browser-specific issues.

### 20. Mobile Device Testing
**Who:** QA or Multiple Team Members
**When:** Before launch
**What:**
Test on physical devices:
- [ ] iPhone (Safari)
- [ ] Android phone (Chrome)
- [ ] iPad (Safari)
- [ ] Android tablet (Chrome)

Check:
- Navigation works
- Forms are usable
- Images display correctly
- Text is readable
- No horizontal scrolling

---

## 🎯 Post-Launch Tasks

### 21. Monitor First 48 Hours
**Who:** Developer
**When:** Immediately after launch
**What:**
- [ ] Check for 404 errors
- [ ] Monitor site uptime
- [ ] Watch for console errors
- [ ] Check form submissions work
- [ ] Monitor page load times
- [ ] Review any user feedback

### 22. Backups
**Who:** Developer
**When:** Ongoing
**What:**
- [ ] Ensure GitHub repository is backed up
- [ ] Keep local copy of original images
- [ ] Export Google Sheets data regularly (if using)
- [ ] Document all API keys in secure location

### 23. Performance Monitoring
**Who:** Developer
**When:** Ongoing
**What:**
- [ ] Run Lighthouse audits monthly
- [ ] Check PageSpeed Insights
- [ ] Monitor Core Web Vitals
- [ ] Optimize as needed

---

## 📞 Stakeholder Communication

### 24. Launch Communication
**Who:** Project Manager or Hotel Owner
**When:** At launch
**What:**
- [ ] Notify staff of new website
- [ ] Update all marketing materials with new URL
- [ ] Update email signatures
- [ ] Update social media profiles
- [ ] Update directory listings
- [ ] Announce on social media

---

## Priority Summary

### Must Do Before Launch
1. ✅ Owner content review and approval
2. ✅ Image compression (large files)
3. ✅ Resolve one-bedroom apartment content issue

### Should Do Soon After Launch (Week 1)
4. Custom domain setup
5. Google Search Console
6. Cross-browser testing completion
7. Monitor first 48 hours

### Can Do Later (Month 1)
8. Resend API configuration
9. Google Sheets API configuration
10. Google Maps API configuration
11. Additional photography
12. PDF flyer updates (when Version 3 available)

---

**Document Created:** 2025-01-10
**Status:** Active task list
**Owner:** Project team + Hotel owner

**Note:** Check off tasks as completed and update this document regularly.
