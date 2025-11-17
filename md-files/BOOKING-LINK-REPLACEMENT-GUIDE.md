# BookingLink Replacement Guide

## Quick Reference

### Old Pattern (Before):
```tsx
import Link from 'next/link'

<Link
  href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
  target="_blank"
  rel="noopener noreferrer"
  className="your-classes-here"
>
  Book Now
</Link>
```

### New Pattern (After):
```tsx
import BookingLink from '@/components/BookingLink'

<BookingLink className="your-classes-here">
  Book Now
</BookingLink>
```

## Files That Need Updating

1. ✅ `/src/components/BookingButton.tsx` - Already uses survey
2. ✅ `/src/app/hotel/HotelBookingButtons.tsx` - Already uses survey
3. `/src/app/hotel/page.tsx` - 7 instances
4. `/src/app/hotel-studio/page.tsx` - Multiple instances
5. `/src/app/hotel/single-room/page.tsx`
6. `/src/app/hotel/single-room-garden/page.tsx`
7. `/src/app/hotel/twin-room/page.tsx`
8. `/src/app/hotel/twin-room-garden/page.tsx`
9. `/src/app/hotel/economy-double/page.tsx`
10. `/src/app/hotel/economy-double-balcony/page.tsx`
11. `/src/app/hotel/double-deluxe/page.tsx`
12. `/src/app/contact/page.tsx`
13. `/src/app/restaurant/page.tsx`
14. `/src/app/restaurant/menu/page.tsx`
15. `/src/app/about/page.tsx`
16. `/src/app/gallery/page.tsx`
17. `/src/app/hotel/gallery/page.tsx`
18. `/src/app/conference/layout.tsx`
19. `/src/components/layout/PlaceLundNav.tsx`

## Step-by-Step Replacement

### Step 1: Add Import
At the top of the file, add:
```tsx
import BookingLink from '@/components/BookingLink'
```

### Step 2: Find and Replace
Search for:
```
href="https://online.bookvisit.com
```

Replace each instance following this pattern:

#### Pattern 1: Simple Link
**Before:**
```tsx
<Link
  href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 text-center border-2 border-[#004225] text-[#004225] py-2 px-4 rounded-md hover:bg-[#FFFAF2] transition-colors"
>
  Book Now
</Link>
```

**After:**
```tsx
<BookingLink className="flex-1 text-center border-2 border-[#004225] text-[#004225] py-2 px-4 rounded-md hover:bg-[#FFFAF2] transition-colors">
  Book Now
</BookingLink>
```

#### Pattern 2: CTA Button
**Before:**
```tsx
<Link
  href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors"
>
  Book Your Room Now
</Link>
```

**After:**
```tsx
<BookingLink className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors">
  Book Your Room Now
</BookingLink>
```

## What to Remove
When replacing, REMOVE these attributes (they're handled automatically):
- `target="_blank"`
- `rel="noopener noreferrer"`
- `href="..."` (unless using a different booking URL)

## What to Keep
KEEP these attributes:
- `className="..."`
- Any other custom props

## Example: Complete File Update

### Before (`/src/app/contact/page.tsx`):
```tsx
import Image from 'next/image'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <main>
      {/* ... other code ... */}
      <Link
        href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#004225] text-white py-3 px-8 rounded-md"
      >
        Book Now
      </Link>
    </main>
  )
}
```

### After (`/src/app/contact/page.tsx`):
```tsx
import Image from 'next/image'
import Link from 'next/link'
import BookingLink from '@/components/BookingLink'

export default function ContactPage() {
  return (
    <main>
      {/* ... other code ... */}
      <BookingLink className="bg-[#004225] text-white py-3 px-8 rounded-md">
        Book Now
      </BookingLink>
    </main>
  )
}
```

## Testing Checklist

After updating each file, test:
- [ ] Click "Book Now" button
- [ ] Google Form opens in new tab (first click only)
- [ ] BookVisit opens in new tab (every click)
- [ ] Click another "Book Now" on the same page
- [ ] Only BookVisit opens (form should not reopen)
- [ ] Refresh page and click again
- [ ] Form opens again (new session)

## Automated Replacement (Optional)

If you want to do a bulk find-and-replace:

### Find (Regex):
```regex
<Link\s+href="https://online\.bookvisit\.com[^"]*"\s+target="_blank"\s+rel="noopener noreferrer"\s+className="([^"]*)"\s*>([\s\S]*?)</Link>
```

### Replace:
```
<BookingLink className="$1">$2</BookingLink>
```

**Important**: Always review automated replacements manually!

## Common Issues

### Issue: "BookingLink is not defined"
**Solution**: Add the import at the top of the file:
```tsx
import BookingLink from '@/components/BookingLink'
```

### Issue: Styles not applying
**Solution**: Make sure you copied the `className` prop correctly

### Issue: Form opens multiple times
**Solution**: Clear browser sessionStorage:
```javascript
sessionStorage.clear()
```

## Progress Tracker

Track your progress as you update each file:

- [ ] `/src/app/hotel/page.tsx`
- [ ] `/src/app/hotel-studio/page.tsx`
- [ ] `/src/app/hotel/single-room/page.tsx`
- [ ] `/src/app/hotel/single-room-garden/page.tsx`
- [ ] `/src/app/hotel/twin-room/page.tsx`
- [ ] `/src/app/hotel/twin-room-garden/page.tsx`
- [ ] `/src/app/hotel/economy-double/page.tsx`
- [ ] `/src/app/hotel/economy-double-balcony/page.tsx`
- [ ] `/src/app/hotel/double-deluxe/page.tsx`
- [ ] `/src/app/contact/page.tsx`
- [ ] `/src/app/restaurant/page.tsx`
- [ ] `/src/app/restaurant/menu/page.tsx`
- [ ] `/src/app/about/page.tsx`
- [ ] `/src/app/gallery/page.tsx`
- [ ] `/src/app/hotel/gallery/page.tsx`
- [ ] `/src/app/conference/layout.tsx`
- [ ] `/src/components/layout/PlaceLundNav.tsx`
