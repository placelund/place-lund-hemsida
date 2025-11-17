# Restaurant Section Documentation

## Overview
The restaurant section displays meal times and daily dinner menus for guests at Place Lund Hotel. The information is dynamically pulled from Google Sheets and displayed on the main homepage.

## Features

### Meal Times
The restaurant offers two meal services daily:

#### Continental Breakfast
- **Weekdays (Monday - Friday)**: 6:30 - 9:00
- **Weekends (Saturday - Sunday)**: 7:30 - 10:00

#### Dinner
- **All Days**: 19:30 - 21:00

### Daily Menu Display
The section shows menus for:
- **Today**: Current day's breakfast time and dinner menu
- **Tomorrow**: Next day's breakfast time and dinner menu

## Technical Implementation

### Components

#### DailyMenu Component
**Location**: `/src/components/sections/DailyMenu.tsx`

**Features**:
- Fetches weekly menu data from `/api/weekly-menu` endpoint
- Automatically determines current day and tomorrow's day
- Detects weekends to display correct breakfast times
- Displays dinner menu from Google Sheets
- Falls back to "Chef's Special" if no menu data available

**Props**: None (standalone component)

### Google Sheets Integration

#### API Endpoint
- **URL**: `/api/weekly-menu`
- **Method**: GET
- **Response Format**:
```json
{
  "menu": [
    {
      "week": 1,
      "day": "Monday",
      "breakfast": "",
      "lunch": "Chef's Special",
      "dinner": ""
    }
  ],
  "currentWeek": 1,
  "source": "google-sheets"
}
```

#### Google Sheets Structure
The system uses two tabs in Google Sheets:
- **Menu Odd Week** (Week 1)
- **Menu Even Week** (Week 2)

**Columns**:
- Column A: Day (Monday, Tuesday, etc.)
- Column B: Dish (dinner menu item)

The system determines odd/even weeks based on ISO week numbers.

### Data Flow

1. **Component mounts** → Fetches data from `/api/weekly-menu`
2. **API fetches** → Google Sheets data via `getCustomWeeklyMenuFromSheet()`
3. **Week calculation** → Determines current week (odd/even) using ISO week number
4. **Day matching** → Finds today's and tomorrow's menu items
5. **Weekend detection** → Checks if day is Saturday or Sunday
6. **Display** → Renders meal times and dinner menu

### Environment Variables Required

```env
GOOGLE_SHEETS_PRIVATE_KEY=<your-private-key>
GOOGLE_SHEETS_CLIENT_EMAIL=<your-service-account-email>
GOOGLE_SPREADSHEET_WEEKLY_MENU_ID=<your-spreadsheet-id>
```

## Design Specifications

### Layout Structure
```
┌─────────────────────────────────────────┐
│     RESTAURANT (Purple Banner)          │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────┐  ┌─────────────┐     │
│  │   TODAY     │  │  TOMORROW   │     │
│  ├─────────────┤  ├─────────────┤     │
│  │ [Day Name]  │  │ [Day Name]  │     │
│  │             │  │             │     │
│  │ 6:30 - 9:00 │  │ 7:30 - 10:00│     │
│  │ Continental │  │ Continental │     │
│  │ Breakfast   │  │ Breakfast   │     │
│  │             │  │             │     │
│  │ 19:30-21:00 │  │ 19:30-21:00 │     │
│  │ [Dinner     │  │ [Dinner     │     │
│  │  Menu]      │  │  Menu]      │     │
│  └─────────────┘  └─────────────┘     │
│                                         │
└─────────────────────────────────────────┘
```

### Color Scheme
- **Banner Background**: `#42001D` (Tyrian Purple)
- **Banner Text**: `#FFFAF2` (Floral White)
- **Section Background**: `#FFFAF2` (Floral White)
- **Breakfast Border**: `#004225` (British Racing Green)
- **Dinner Border**: `#42001D` (Tyrian Purple)
- **Day Badge (Today)**: `#004225` background
- **Day Badge (Tomorrow)**: `#42001D` background

### Typography
- **Banner Title**: 2.5rem (mobile) / 3.5rem (desktop), bold, uppercase
- **Day Name**: 3xl, bold
- **Time Headers**: 2xl, bold
- **Meal Names**: lg, regular

## Usage in Homepage

The DailyMenu component is integrated into the main page:

**Location**: `/src/app/page.tsx`

```tsx
import DailyMenu from '@/components/sections/DailyMenu'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PropertySelection />
      <DailyMenu />        {/* Restaurant section */}
      <LocationMap />
      <FAQSection />
    </main>
  )
}
```

## Updating Menu Content

### Via Google Sheets
1. Open the Google Spreadsheet
2. Navigate to "Menu Odd Week" or "Menu Even Week" tab
3. Update the dish in Column B for the desired day
4. Changes will reflect on the website within minutes (cached for performance)

### Fallback Content
If Google Sheets is unavailable or returns no data, the system displays:
- "Chef's Special" for all dinner menus

## Error Handling

The component handles the following scenarios:
- **API Failure**: Shows "Menu information unavailable"
- **Missing Data**: Falls back to "Chef's Special"
- **Whitespace in Data**: Trims day names to handle formatting issues
- **Loading State**: Displays "Loading menu..." while fetching

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile, tablet, and desktop
- Requires JavaScript enabled for dynamic content

## Performance Considerations
- Data fetched client-side on component mount
- Consider adding caching/revalidation for production
- API responses are relatively small (~1-2KB)

## Future Enhancements (Potential)
- [ ] Add weekly full menu view
- [ ] Include lunch menu
- [ ] Add dietary information (vegetarian, vegan, allergens)
- [ ] Make meal times configurable via Google Sheets
- [ ] Add special event menus (holidays, etc.)
- [ ] Include menu descriptions/images
- [ ] Add "Book a Table" button
- [ ] Show chef's recommendations

## Maintenance Notes
- Menu updates happen in Google Sheets
- Week cycle automatically managed by ISO week calculation
- No manual intervention needed for week transitions
- Monitor API error logs for Google Sheets connection issues
