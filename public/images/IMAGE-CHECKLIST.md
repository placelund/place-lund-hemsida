# Image Placeholder Checklist

Place the following images in the `/public/images/hero/` directory:

## Required Hero/Placeholder Images

- [x] `hero-placeholder.png` - Hero section background (AVAILABLE)
- [x] `hotel-placeholder.png` - Traditional hotel rooms (AVAILABLE - 4.0MB)
- [x] `hotel-studio-placeholder.png` - Hotel studio rooms (AVAILABLE - 8.1MB)
- [x] `studio-apartments-placeholder.png` - Studio apartments (AVAILABLE - 4.1MB)
- [x] `conference-placeholder.png` - Conference facilities (AVAILABLE - 4.8MB)

## Hero Slideshow Images

Located in `/public/images/hero/hero-image-slideshow/`:
- [x] `heroplaceholder.png` - Main hero placeholder (3.9MB)
- [x] `IMG_7185.jpeg` - Hero slideshow image 1 (2.5MB)
- [x] `IMG_7192.jpeg` - Hero slideshow image 2 (3.0MB)
- [x] `IMG_7200.jpeg` - Hero slideshow image 3 (2.2MB)

## Current Status

**Total Placeholder Images Needed:** 5
**Images Added:** 5/5 ✅ ALL COMPLETE
**Hero Slideshow Images:** 4 images available
**Status:** All placeholder images are in place and ready to use

## Where These Images Appear

### Hero Section
- File: `src/components/sections/HeroSection.tsx`
- Image: `hero-placeholder.jpg`
- Location: Full-screen background

### Property Selection Cards
- File: `src/components/sections/PropertySelection.tsx`
- Images:
  - `hotel-placeholder.jpg` (Hotel card)
  - `hotel-studio-placeholder.jpg` (Hotel Studio card)
  - `studio-apartments-placeholder.jpg` (Studio Apartments card)
- Location: "Choose Your Stay" section

## To Activate Images

Once images are added:

1. Uncomment the `<Image>` components in:
   - `src/components/sections/HeroSection.tsx` (lines 11-18)
   - `src/components/sections/PropertySelection.tsx` (lines 43-49)

2. The images will automatically replace the gradient placeholders

---

## Additional Image Collections

### Hotel Rooms
- **Single Garden View:** 5 images (public/images/rooms/single-garden/)
- **Single Street View:** 3 images (public/images/rooms/single-street/)
- **Twin Garden View:** 9 images (public/images/rooms/twin-garden/)
- **Twin Street View:** 6 images (public/images/rooms/twin-street/)
- **Economy Double:** 2 images (public/images/rooms/economy-double/)
- **Economy Double Balcony:** 3 images (public/images/rooms/economy-double-balcony/)
- **Double Deluxe:** 2 images (public/images/rooms/double-deluxe/)

### Hotel Studios
- 8 images (public/images/studios/)

### Apartments
- 17 images (public/images/apartments/)

### Conference Rooms
- **General Gallery:** 34 images (public/images/conference/Gallery/)
- **Margaretha:** 10 images (public/images/conference/Margaretha/)
- **Sankt Hans:** 10 images (public/images/conference/Sankt-Hans/)
- **Sofia:** 10 images (public/images/conference/Sofia/)

### Restaurant
- 4 images (public/images/resturaunt/)

### General Gallery
- 18 images (public/images/Gallery/)

### Flyers (PDF)
- Sofia conference flyer (967 KB)
- Margaretha conference flyer (877 KB)
- Sankt Hans conference flyer (528 KB)

---

*Created: 2025-10-26*
*Last Updated: 2025-01-10*

**Summary:** All placeholder images are available. Room, apartment, conference, and restaurant photos are in place and organized by category.
