# Booking System Documentation

## Overview
The booking system integrates a Google Form survey that pops up when customers click "Book Now" buttons, while simultaneously directing them to the BookVisit booking platform.

## Components

### 1. BookingButton Component
**Location**: `/src/components/BookingButton.tsx`

**Features**:
- Opens Google Form in a new tab on first click
- Opens BookVisit booking page in a new tab
- Uses session storage to prevent multiple form popups
- Fully customizable styling via className prop

**Usage**:
```tsx
import BookingButton from '@/components/BookingButton'

<BookingButton className="your-custom-classes">
  Book Now
</BookingButton>
```

### 2. Hotel-Specific Booking Buttons
**Location**: `/src/app/hotel/HotelBookingButtons.tsx`

Pre-styled button components for the hotel pages:
- `RoomBookingButton` - For individual room cards
- `CTABookingButton` - For call-to-action sections

**Usage**:
```tsx
import { RoomBookingButton, CTABookingButton } from './HotelBookingButtons'

// In room cards
<RoomBookingButton />

// In CTA sections
<CTABookingButton />
```

## Google Form Integration

### Form Details
- **Form URL**: https://docs.google.com/forms/d/e/1FAIpQLSda9jYHPBdKTJPLX_N8E6lvbJIAvxEcit8oCY5ZS0niDcpo0g/viewform
- **Response Spreadsheet**: BookVisit Survey Statistics
- **Spreadsheet ID**: 1zBDySAZ7qoViyfCc0Bo6LK2EQ2I04Bn_wg1K_UPcNDI

### How It Works
1. User clicks any "Book Now" button on the website
2. **First click in session**: Google Form opens in a new tab
3. **Every click**: BookVisit booking page opens in a new tab
4. Session tracking prevents form from opening multiple times during the same browsing session
5. Form responses are automatically saved to the connected Google Sheets

## BookVisit Integration

### Booking Platform
- **Platform**: BookVisit
- **URL**: https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872
- **Channel ID**: 7f2bb109-b49b-49f0-8d2c-113614f7f872

## Session Management

The system uses `sessionStorage` to track if the Google Form has been shown:
- Key: `googleFormOpened`
- Value: `"true"` when form has been opened
- Cleared when browser tab/window is closed
- Resets for each new browsing session

## Customization

### Changing the Google Form URL
Edit `/src/components/BookingButton.tsx`:
```tsx
const googleFormsUrl = 'YOUR_NEW_FORM_URL'
```

### Changing the BookVisit URL
Pass a custom URL via the `bookVisitUrl` prop:
```tsx
<BookingButton bookVisitUrl="https://your-custom-booking-url.com">
  Book Now
</BookingButton>
```

### Modifying Session Behavior
To make the form appear on every click (remove session tracking):
1. Open `/src/components/BookingButton.tsx`
2. Remove the `hasOpened` state check
3. Remove `sessionStorage` logic

## Data Flow

```
User clicks "Book Now"
    ↓
BookingButton component
    ↓
├─→ Check sessionStorage
│   ├─→ If not opened: Open Google Form + Set flag
│   └─→ If already opened: Skip form
│
└─→ Open BookVisit booking page
    ↓
Form responses saved to Google Sheets
```

## Files Modified/Created

### New Files
- `/src/components/BookingButton.tsx` - Main booking button component
- `/src/app/hotel/HotelBookingButtons.tsx` - Hotel-specific button wrappers
- `/BOOKING-SYSTEM.md` - This documentation file

### Files to Update
Replace existing BookVisit Link components with BookingButton components in:
- `/src/app/hotel/page.tsx` - Hotel rooms page
- `/src/app/hotel-studio/page.tsx` - Hotel studio page
- Individual room detail pages
- Any other pages with booking links

## Implementation Example

### Before (Old Link):
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

### After (New BookingButton):
```tsx
import { RoomBookingButton } from './HotelBookingButtons'

<RoomBookingButton />
```

## Testing

To test the booking system:
1. Open the website in a new browser tab
2. Click any "Book Now" button
3. Verify both Google Form and BookVisit open in new tabs
4. Click another "Book Now" button in the same tab
5. Verify only BookVisit opens (form should not reappear)
6. Close the tab and open a new one
7. Verify the form appears again on first click

## Troubleshooting

### Form not opening
- Check browser popup blocker settings
- Verify Google Form URL is correct
- Check browser console for errors

### Form opening multiple times
- Check sessionStorage is working
- Verify `hasOpened` state logic in BookingButton.tsx

### BookVisit not opening
- Verify BookVisit URL is correct
- Check Channel ID is accurate
- Ensure popup blockers aren't interfering

## Future Enhancements

Potential improvements:
- [ ] Add analytics tracking for form opens
- [ ] Create admin dashboard for form responses
- [ ] Add confirmation message after booking
- [ ] Implement A/B testing for different survey questions
- [ ] Add localStorage for cross-session tracking (optional)
- [ ] Create email notifications for new survey responses
