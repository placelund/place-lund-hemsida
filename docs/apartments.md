# Apartments - Place Lund

## Purpose
Comprehensive documentation for apartment accommodations at Place Lund Hotel, including studio apartments and one/two-bedroom apartments for extended stays.

## Target URLs
- `/apartments` - Main apartments overview
- `/apartments/studio` - Studio apartment details
- `/apartments/one-bedroom` - One bedroom apartment details (currently using two-bedroom content)

---

## SEO

**Title:** "Apartments in Lund - Place Lund Hotel | Monthly Rentals"
**Meta Description:** "Extended stay apartments in Lund, Sweden. Studio and multi-bedroom options with full kitchens, perfect for relocations, business stays, and families. Monthly rentals available."
**Primary Keywords:** apartments Lund, monthly rental Lund, extended stay Lund, temporary housing Lund
**Schema:** Apartment, LodgingBusiness, Residence

---

## Apartment Types

### 1. Studio Apartments
- **Size:** Approximately 25-30 m�
- **Layout:** Combined living/sleeping area
- **Beds:** Single or double bed options
- **Capacity:** 1-2 people
- **Kitchen:** Kitchenette with basic appliances
- **Bathroom:** Private bathroom with shower
- **Rental:** Nightly and monthly rentals available

#### Studio Amenities:
- Kitchenette (stove, refrigerator, microwave)
- Coffee maker
- Dishware and utensils
- Free WiFi
- TV
- Desk workspace
- Wardrobe
- Private bathroom with shower
- Hair dryer
- Weekly cleaning
- No smoking

### 2. One Bedroom Apartments
**NOTE:** Current website content shows two-bedroom specifications. Needs verification.

- **Size:** Approximately 50-60 m� (based on current content)
- **Layout:** Separate bedroom + living area
- **Beds:** Queen size bed
- **Capacity:** Up to 2-3 people
- **Kitchen:** Full kitchen with appliances
- **Bathroom:** One full bathroom
- **Rental:** Monthly rentals only

### 3. Two Bedroom Apartments
- **Size:** 86 m�
- **Layout:** Two bedrooms + living room
- **Beds:** Queen size beds + sofa bed
- **Capacity:** Up to 4 people
- **Kitchen:** Fully equipped with appliances
- **Bathrooms:** Two full bathrooms
- **Storage:** Large wardrobe
- **Rental:** Monthly rentals only

#### Two Bedroom Amenities:
- Full kitchen (oven, stove, refrigerator, microwave)
- Coffee maker
- Dishware and utensils
- Free WiFi
- TV
- Desk and workspace
- Washing machine
- Dryer
- Large wardrobe
- Hair dryer
- Two bathrooms
- Parquet flooring
- No smoking

---

## Important Notes

### Meals NOT Included
**CRITICAL:** Apartments do NOT include breakfast or dinner. All apartments have kitchens for self-catering.

### Minimum Stay
- **Studios:** Available for nightly and monthly rentals
- **One/Two Bedroom:** Monthly rentals only

### Rental Terms
- Monthly rentals available
- Contact hotel for availability and pricing
- Long-term stay discounts may be available

---

## Perfect For

### Studio Apartments:
- Business travelers on extended assignments
- University researchers and visiting professors
- Temporary housing during home renovations
- Solo travelers wanting more space
- Budget-conscious extended stays

### One/Two Bedroom Apartments:
- Families with children
- Extended business stays (1+ months)
- University relocations
- Temporary housing for hospital patients' families
- Couples wanting extra space
- Home renovation temporary housing
- Corporate housing

---

## Location Benefits

All apartments are located in northern Lund with easy access to:

- **Lund University & LTH:** Close proximity to campus
- **City Center:** Walking distance to shops and restaurants
- **Train Station:** Minutes away - easy access to Copenhagen, Malm�
- **Ideon Science Park:** Short commute
- **University Hospital:** Nearby
- **Public Transportation:** Excellent bus connections
- **St. Hans Backar Park:** 300m away
- **Viktoriastadion:** 350m
- **Delfinen Swimming Hall:** 1100m

---

## Booking Information

**Contact Information:**
- **Phone:** +46 46 33 36 00
- **Email:** info@placelund.se
- **Address:** Margaretav�gen 7, 222 40 Lund, Sweden

**How to Book:**
1. Contact hotel directly for availability
2. Discuss your requirements (dates, number of guests, apartment type)
3. Receive pricing quote
4. Confirm booking
5. Receive check-in instructions

---

## Images Required

### Studio Apartments
Suggested image names for `/public/images/studios/`:
- `hotel-studio-place-lund-sweden-1.jpeg` through `hotel-studio-place-lund-sweden-8.jpeg` (AVAILABLE - 8 images)

### One/Two Bedroom Apartments
Suggested image names for `/public/images/apartments/`:
- `apartment-lund-sweden-place-hotel-1.jpg` through `apartment-lund-sweden-place-hotel-17.jpeg` (AVAILABLE - 17 images)

### Gallery Page
- Dedicated apartment gallery available at `/apartments/gallery`

---

## Page Structure Recommendations

### Main Apartments Page (/apartments)

#### Hero Section
- Title: "A Place to Live"
- Subtitle: "Extended Stay Apartments in Lund"
- Background: Apartment exterior or living area
- CTA buttons: "Studio Apartments" / "One Bedroom" / "Contact Us"

#### Sections:
1. **Apartment Types Overview**
   - Studio, One Bedroom, Two Bedroom cards
   - Key features for each
   - Capacity and size info
   - Links to detail pages

2. **Why Choose Apartments**
   - Self-catering flexibility
   - More space than hotel rooms
   - Perfect for extended stays
   - Cost-effective for long-term

3. **Location Advantages**
   - University proximity
   - City center access
   - Transportation links
   - Local amenities

4. **Booking Information**
   - Contact details
   - Monthly rental information
   - CTA to contact form

### Studio Apartment Page (/apartments/studio)
- Detailed specifications
- Image gallery (8 images available)
- Amenities list
- Pricing information
- Booking CTA

### One/Two Bedroom Pages
- **IMPORTANT:** Current `/apartments/one-bedroom` page shows TWO bedroom content
- Needs clarification on actual one-bedroom offerings
- Separate pages for one and two bedroom may be needed

---

## Key Messages

1. **Meals** = NOT included (self-catering with full kitchens)
2. **Rental Terms** = Studios (nightly/monthly), Larger apartments (monthly only)
3. **Capacity** = Studios (1-2), One bedroom (2-3), Two bedroom (up to 4)
4. **Location** = Northern Lund, close to university and city center
5. **Perfect For** = Extended stays, relocations, business travelers, families
6. **Contact** = Direct booking through hotel (no online booking)

---

## Content Issues to Address

### � URGENT: One Bedroom Page Discrepancy
The file `/src/app/apartments/one-bedroom/page.tsx` currently contains:
- Title in metadata: "Two Bedroom Apartment"
- Description: "86m� with two bathrooms"
- Content: Two bedroom specifications (86m�, two bathrooms, up to 4 people)

**This needs to be resolved by either:**
1. Creating a separate two-bedroom page and updating one-bedroom with correct content
2. Verifying with hotel if they actually have separate one-bedroom apartments
3. Renaming the current page to `/apartments/two-bedroom` and creating proper one-bedroom content

---

**Document Created:** 2025-01-10
**Source:** Multiple pages - /apartments, /apartments/studio, /apartments/one-bedroom
**Documentation Language:** English

## Notes for Website Maintenance

- Verify actual apartment inventory with hotel owner
- Clarify one bedroom vs two bedroom offerings
- Update pricing if different for different apartment types
- Confirm minimum stay requirements for each type
- Add specific monthly rental rates when available
