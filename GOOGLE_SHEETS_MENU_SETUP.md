# Google Sheets Menu Setup Guide

This guide explains how to set up the restaurant menu management system using Google Sheets.

## Overview

The menu system fetches menu items from a Google Sheet and displays them on the restaurant page. If Google Sheets is not configured, it falls back to hardcoded menu items.

## Google Sheet Setup

### 1. Create a new sheet named "Menu" in your existing spreadsheet

The same spreadsheet used for FAQs can be used. Just add a new sheet called "Menu".

### 2. Set up columns

Create the following columns in row 1:

| Column A | Column B | Column C | Column D | Column E | Column F |
|----------|----------|----------|----------|----------|----------|
| name | description | price | category | order | published |

### 3. Add menu items

Example rows:

| name | description | price | category | order | published |
|------|-------------|-------|----------|-------|-----------|
| Place Frukost | Our signature breakfast buffet | 63 kr | Breakfast | 1 | TRUE |
| Varm Lunch | Hot lunch with daily special | 210 kr | Lunch | 2 | TRUE |
| Package Offer | Full day conference package including meals | 600 kr | Conference | 3 | TRUE |
| Kaffe med Bakverk | Coffee served with fresh pastry | 62 kr | Coffee & Snacks | 4 | TRUE |
| Kaffe med Småkaka | Coffee served with cookie | 35 kr | Coffee & Snacks | 5 | TRUE |

### Column Descriptions

- **name** (required): The name of the menu item
- **description** (optional): A brief description of the item
- **price** (required): The price including currency (e.g., "63 kr")
- **category** (required): Category for grouping items (e.g., "Breakfast", "Lunch", "Coffee & Snacks", "Conference")
- **order** (required): Number to control display order (lower numbers appear first)
- **published** (required): Set to "TRUE" or "1" to display, "FALSE" or "0" to hide

## Environment Variables

Make sure these are set in your `.env.local` file:

```env
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_here
GOOGLE_SHEETS_CLIENT_EMAIL=your_service_account_email
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

## API Endpoint

The menu data is available at: `/api/menu`

## Usage in Components

To fetch and display menu items in a component:

```typescript
async function getMenu() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const response = await fetch(`${baseUrl}/api/menu`, {
    next: { revalidate: 300 }, // Revalidate every 5 minutes
  })

  if (!response.ok) {
    throw new Error('Failed to fetch menu')
  }

  const data = await response.json()
  return data.menu
}
```

## Categories

Suggested categories for organization:
- **Breakfast** - Morning meal items
- **Lunch** - Midday meal options
- **Coffee & Snacks** - Light refreshments
- **Conference** - Conference packages and catering
- **Drinks** - Beverages (alcoholic and non-alcoholic)
- **Bar** - Bar menu items

## Data Validation

The system automatically:
- Filters out items where `published` is not TRUE/1
- Filters out items missing required fields (name, price)
- Sorts items by the `order` field
- Falls back to hardcoded menu if Google Sheets fails

## Testing

1. Add items to your Google Sheet
2. Set `published` to TRUE
3. Visit `/api/menu` to verify data is loading
4. Check the restaurant page to see items displayed

## Troubleshooting

**Menu not updating?**
- Check that the sheet is named exactly "Menu" (case-sensitive)
- Verify the `published` column is set to TRUE or 1
- Check the API response at `/api/menu` for error messages
- Ensure Google Sheets credentials are correctly configured

**Items not appearing?**
- Verify required fields (name, price) are filled
- Check `published` is set to TRUE
- Check `order` numbers are correct
- Look for console errors in browser/server logs

## Fallback Menu

If Google Sheets is not configured or fails, the system automatically uses a fallback menu with basic items. This ensures the website always displays menu information.
