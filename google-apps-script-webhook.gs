function onEdit(e) {
  // Define the webhook URLs for all your environments
  var webhookUrls = [
    'https://place-lund-hotel.vercel.app/api/webhook/sheets-update',
    'https://placelund.com/api/webhook/sheets-update',
    'https://place-lund-rbuc6ldy7-place-lunds-projects.vercel.app/api/webhook/sheets-update'
  ];

  // Get the edited sheet information
  var sheet = e.source.getActiveSheet();
  var sheetName = sheet.getName();

  // Only trigger for specific sheets (FAQ and Menu related sheets)
  var triggerSheets = ['Sheet1', 'FAQ', 'Menu', 'General', 'Restaurant', 'Conference', 'Apartment'];

  if (triggerSheets.indexOf(sheetName) === -1) {
    return; // Exit if not a relevant sheet
  }

  // Prepare the payload
  var payload = {
    'sheetName': sheetName,
    'editedRange': e.range.getA1Notation(),
    'timestamp': new Date().toISOString(),
    'action': 'sheet_updated'
  };

  // Send webhook to all URLs
  webhookUrls.forEach(function(url) {
    try {
      var options = {
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json'
        },
        'payload': JSON.stringify(payload)
      };

      UrlFetchApp.fetch(url, options);
      console.log('Webhook sent successfully to: ' + url);
    } catch (error) {
      console.error('Failed to send webhook to ' + url + ': ' + error.toString());
    }
  });
}