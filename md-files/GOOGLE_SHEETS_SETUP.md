# Google Sheets API Setup for FAQ Management

This guide will help you set up Google Sheets integration to manage FAQs dynamically without code changes.

## 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select an existing one)
3. Enable the Google Sheets API:
   - Click "Enable APIs and Services"
   - Search for "Google Sheets API"
   - Click "Enable"

## 2. Create a Service Account

1. In Google Cloud Console, go to "IAM & Admin" → "Service Accounts"
2. Click "Create Service Account"
3. Enter a name (e.g., "place-lund-faq-reader")
4. Click "Create and Continue"
5. Skip the optional permissions (click "Continue")
6. Click "Done"

## 3. Create Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" → "Create new key"
4. Select "JSON" format
5. Click "Create" - this will download a JSON file
6. **Keep this file secure!** It contains your credentials

## 4. Set Up Environment Variables

Open the downloaded JSON file and extract these values:

```bash
# From the JSON file, find these fields:
GOOGLE_SHEETS_CLIENT_EMAIL=<client_email>
GOOGLE_SHEETS_PRIVATE_KEY=<private_key>
```

Add these to your `.env.local` file:

```env
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour\nPrivate\nKey\nHere\n-----END PRIVATE KEY-----\n"
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_here
```

**Note**: The private key should be wrapped in quotes and newlines should be literal `\n` characters.

## 5. Create the FAQ Google Sheet

1. Create a new Google Sheet
2. Name the first sheet "FAQs"
3. Set up columns in row 1:
   - Column A: `question`
   - Column B: `answer`
   - Column C: `order`
   - Column D: `published`

Example:

| question | answer | order | published |
|----------|--------|-------|-----------|
| What time is check-in? | Check-in is from 3:00 PM | 1 | true |
| Are meals included? | Yes, breakfast and dinner are included | 2 | true |
| Is WiFi free? | Yes, WiFi is complimentary | 3 | false |

4. Get the Spreadsheet ID:
   - Look at the URL: `https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit`
   - Copy the `SPREADSHEET_ID` portion
   - Add it to your `.env.local` file

## 6. Share the Sheet with Service Account

1. Open your Google Sheet
2. Click "Share" button
3. Add the service account email (the `GOOGLE_SHEETS_CLIENT_EMAIL` value)
4. Give it "Viewer" permissions
5. Uncheck "Notify people"
6. Click "Share"

## 7. Test the Integration

1. Start your development server: `npm run dev`
2. Visit: `http://localhost:3000/api/faq`
3. You should see your FAQs in JSON format

If there's an error, check:
- Service account email is correct
- Private key is properly formatted (with `\n` for newlines)
- Spreadsheet ID is correct
- Sheet is shared with the service account email
- Sheet name is exactly "FAQs"

## 8. Managing FAQs

To add/edit/remove FAQs:

1. Open your Google Sheet
2. Edit the FAQ rows:
   - **question**: The question text
   - **answer**: The answer text (can be multiple sentences)
   - **order**: Number to control display order (1, 2, 3, etc.)
   - **published**: `true` to show, `false` to hide

3. Save the sheet - changes will appear automatically on the website!

**Note**: The FAQ page will use fallback FAQs if Google Sheets is not configured or if there's an error.

## Column Details

- **question** (required): The FAQ question
- **answer** (required): The answer to the question
- **order** (optional): Display order (lower numbers appear first). Default: 0
- **published** (required): `true` or `1` to show the FAQ, `false` or `0` to hide it

## Troubleshooting

### "Missing Google Sheets credentials" error
- Check that `GOOGLE_SHEETS_CLIENT_EMAIL` and `GOOGLE_SHEETS_PRIVATE_KEY` are set in `.env.local`
- Make sure the private key has proper newline characters (`\n`)

### "The caller does not have permission" error
- Make sure the sheet is shared with the service account email
- Check that the service account has "Viewer" permission

### FAQs not updating
- Check that the sheet name is exactly "FAQs"
- Verify the spreadsheet ID is correct
- Make sure the `published` column has `true` for FAQs you want to display

### FAQs appear in wrong order
- Check the `order` column values
- Lower numbers appear first

## Security Notes

- Never commit `.env.local` to version control
- Keep your service account key file secure
- The service account only needs "Viewer" permission (read-only)
- Consider using different service accounts for development and production
