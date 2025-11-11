# Image Verification Checklist

Verify all images are correct, optimized, and displaying properly before launch.

---

## ✅ Placeholder Images (Hero Section)

Location: `/public/images/hero/`

- [x] `hotel-placeholder.png` - 4.0MB - ✅ Available
- [x] `hotel-studio-placeholder.png` - 8.1MB - ⚠️ Large file
- [x] `studio-apartments-placeholder.png` - 4.1MB - ✅ Available
- [x] `conference-placeholder.png` - 4.8MB - ✅ Available

**Status:** All available, but studio placeholder is large (consider compression)

---

## 🎞️ Hero Slideshow Images

Location: `/public/images/hero/hero-image-slideshow/`

- [x] `heroplaceholder.png` - 3.9MB
- [x] `IMG_7185.jpeg` - 2.5MB
- [x] `IMG_7192.jpeg` - 3.0MB
- [x] `IMG_7200.jpeg` - 2.2MB

**Total:** 4 images available
**Action Required:** Rename to descriptive names once hero slideshow is implemented
  - Example: `hero-exterior-1.jpeg`, `hero-lobby-1.jpeg`, etc.

---

## 🏨 Hotel Room Images

### Single Garden View (`/public/images/rooms/single-garden/`)
- [x] 5 images available
- [ ] Verify images match room specifications
- [ ] Check image quality

### Single Street View (`/public/images/rooms/single-street/`)
- [x] 3 images available
- [ ] Verify images match room specifications
- [ ] Check image quality

### Twin Garden View (`/public/images/rooms/twin-garden/`)
- [x] 9 images available (includes 1 .jpg, rest .jpeg)
- [ ] Verify 2-bed configuration shown
- [ ] Check image consistency

### Twin Street View (`/public/images/rooms/twin-street/`)
- [x] 6 images available (1 .jpg, rest .jpeg)
- [ ] Verify 2-bed configuration shown
- [ ] Check image consistency

### Economy Double (`/public/images/rooms/economy-double/`)
- [x] 2 images available
- [ ] Verify matches current room setup
- [ ] Check if more photos needed

### Economy Double Balcony (`/public/images/rooms/economy-double-balcony/`)
- [x] 3 images available
- [ ] Verify balcony/patio shown
- [ ] Check outdoor space visible

### Double Deluxe (`/public/images/rooms/double-deluxe/`)
- [x] 2 images available
- [ ] Verify shows 2-room layout
- [ ] Check if more photos needed showing living room

**Hotel Rooms Total:** 30 images

---

## 🏢 Hotel Studio Images

Location: `/public/images/studios/`

- [x] 8 images available (`hotel-studio-place-lund-sweden-1.jpeg` through `-8.jpeg`)
- [ ] Verify kitchenette visible in photos
- [ ] Check combined living/sleeping area shown
- [ ] Confirm images match current studio setup

---

## 🏘️ Apartment Images

Location: `/public/images/apartments/`

- [x] 17 images available (mixed .jpg and .jpeg)
  - Files 1-5: .jpg format
  - Files 6-17: .jpeg format
- [ ] Verify full kitchen shown
- [ ] Check bedroom(s) visible
- [ ] Confirm bathroom photos
- [ ] Verify matches one-bedroom vs two-bedroom distinction

⚠️ **Content Issue:** One-bedroom page currently shows two-bedroom content. Verify which apartment type these images represent.

---

## 🎤 Conference Room Images

### General Gallery (`/public/images/conference/Gallery/`)
- [x] 34 images available
- [ ] Verify variety of room setups shown
- [ ] Check hybrid meeting technology visible
- [ ] Confirm images showcase all 3 rooms

### Margaretha (`/public/images/conference/Margaretha/`)
- [x] 10 images available + 1 PDF floor plan
- [ ] Verify shows 30-90 person capacity
- [ ] Check projector visible
- [ ] Confirm room setup variety

### Sankt Hans (`/public/images/conference/Sankt-Hans/`)
- [x] 10 images available + 1 PDF floor plan
- [ ] Verify shows boardroom style
- [ ] Check 18-person capacity evident
- [ ] Confirm professional setup

### Sofia (`/public/images/conference/Sofia/`)
- [x] 11 images available + 1 PDF floor plan
- [ ] Verify shows divisible room
- [ ] Check screen equipment visible
- [ ] Confirm can see 10+16 split option

**Conference Total:** 65+ images + 3 PDF floor plans

---

## 🍽️ Restaurant Images

Location: `/public/images/resturaunt/` (note: folder misspelled)

- [x] 4 images available (`IMG_7497.jpeg`, `IMG_7505.jpeg`, `IMG_7508.jpeg`, `IMG_7518.jpeg`)
- [ ] Rename to descriptive names (e.g., `restaurant-bar-1.jpeg`)
- [ ] Verify shows breakfast buffet
- [ ] Check bar area visible
- [ ] Confirm garden seating shown (if applicable)
- [ ] Consider adding more restaurant photos

⚠️ **Folder Name:** `resturaunt` should be `restaurant` (typo)

---

## 🖼️ General Gallery

Location: `/public/images/Gallery/`

- [x] 18 images available (`place-lund-hotel-gallery-1.jpeg` through `-18.jpeg`)
- [ ] Verify good variety of hotel areas
- [ ] Check image quality consistent
- [ ] Confirm no duplicates from other sections

---

## 📄 PDF Flyers

Location: `/public/images/conference/*/`

- [x] Sofia flyer - 967 KB
- [x] Margaretha flyer - 877 KB
- [x] Sankt Hans flyer - 528 KB

**Action Required:**
- [ ] Verify these are Version 3 (or update to Version 3 when available)
- [ ] Check all pricing and information is current
- [ ] Confirm PDFs open correctly in browsers

---

## 🔧 Technical Image Issues

### File Size Concerns

**Large Images (>3MB):**
- `hotel-studio-placeholder.png` - 8.1MB ⚠️ **Priority: Compress**
- `conference-placeholder.png` - 4.8MB
- `hero-placeholder.png` - 4.0MB
- `studio-apartments-placeholder.png` - 4.1MB
- `heroplaceholder.png` - 3.9MB
- `IMG_7192.jpeg` - 3.0MB

**Recommendation:** Compress large images to <500KB using tools like TinyPNG, ImageOptim, or Squoosh.

### File Format Consistency

- [ ] Some folders use .jpg, others .jpeg - standardize if needed
- [ ] Consider converting PNGs to JPEGs for photos (smaller file size)
- [ ] Ensure all images are RGB (not CMYK)

### Naming Conventions

**Need Renaming:**
- Restaurant images (`IMG_xxxx.jpeg` → `restaurant-xxx.jpeg`)
- Hero slideshow (`IMG_xxxx.jpeg` → descriptive names)

**Good Examples:**
- `hotel-studio-place-lund-sweden-1.jpeg` ✅
- `place-lund-hotel-gallery-1.jpeg` ✅
- Room images with descriptive folder names ✅

---

## 📱 Image Display Verification

### On All Pages

- [ ] Images load on first page visit
- [ ] Images are responsive (mobile/tablet/desktop)
- [ ] No image distortion or stretching
- [ ] Lazy loading works properly
- [ ] Alt text present on all images
- [ ] Images don't cause layout shift

### Gallery Functionality

- [ ] Image galleries load correctly
- [ ] Clicking images works (if lightbox)
- [ ] Navigation between images works
- [ ] Close/back buttons function

---

## ✅ Owner Verification Required

**Hotel Owner Must Review:**

- [ ] All room photos match current room setups
- [ ] Conference room photos are up-to-date
- [ ] Restaurant photos reflect current dining area
- [ ] No outdated furniture/decor in photos
- [ ] All photos approved for public use
- [ ] No privacy concerns (guests visible, etc.)

---

## 🎯 Priority Actions

### High Priority (Before Launch)
1. Compress large placeholder images (>3MB)
2. Verify owner approval on all images
3. Check apartment images match correct room types
4. Rename restaurant images to descriptive names

### Medium Priority (Can do after launch)
1. Add more restaurant photos if needed
2. Get more Double Deluxe photos showing both rooms
3. Standardize file extensions (.jpg vs .jpeg)
4. Update PDF flyers to Version 3

### Low Priority (Nice to have)
1. Professional photography session for key areas
2. Seasonal photos (summer garden, winter interior)
3. Guest experience photos (with permission)
4. Staff photos for about page

---

**Checklist Version:** 1.0
**Last Updated:** 2025-01-10
**Total Images:** 150+ images + 3 PDFs
**Status:** Inventory complete, verification in progress
