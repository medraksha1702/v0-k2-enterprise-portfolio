# Google Sheets Integration Setup for Service Requests

This guide explains how to set up automatic Google Sheets storage for service request form submissions on K² Enterprise website.

## Overview

The service request form now supports a hybrid approach:
1. **Google Sheets Storage** - Automatically saves all submissions to a Google Sheet
2. **WhatsApp Direct Message** - Offers users a quick WhatsApp contact option after submission

## Setup Instructions

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "K² Enterprise Service Requests"
3. Add the following column headers in the first row:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Hospital/Facility`
   - D1: `Phone`
   - E1: `Equipment Type`
   - F1: `Issue Description`

### Step 2: Create a Google Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete the default code and paste the following:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Append the data as a new row
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.hospital,
      data.phone,
      data.equipment,
      data.issue
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      message: "Data saved to Google Sheet"
    })).setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Deploy** > **New Deployment**
4. Select **Type** > **Web app**
5. Set **Execute as** to your Google account
6. Set **Who has access** to "Anyone"
7. Click **Deploy**
8. Copy the deployment URL (it will look like `https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercontent`)

### Step 3: Add Environment Variable to Vercel

1. Go to your Vercel project settings
2. Navigate to **Environment Variables** section
3. Add a new variable:
   - **Name**: `GOOGLE_APPS_SCRIPT_WEBHOOK_URL`
   - **Value**: Paste the deployment URL from Step 2

4. Redeploy your project for changes to take effect

### Step 4: Test the Integration

1. Go to your K² Enterprise website
2. Fill out the "Request Your Service" form
3. Submit the form
4. Check your Google Sheet - the new entry should appear automatically
5. Users will also see a WhatsApp button in the success message

## Features

✅ **Automatic Logging**: Every submission is automatically saved to Google Sheets
✅ **Timestamps**: Each entry includes the exact submission time
✅ **WhatsApp Option**: Users can send message directly via WhatsApp
✅ **Error Handling**: If Google Sheets integration fails, the form still works and data is logged locally
✅ **Pre-filled Messages**: WhatsApp messages include all submitted information

## Troubleshooting

### Submissions not appearing in Google Sheet?

1. Check that the Google Apps Script deployment is still active
2. Verify the environment variable is set correctly in Vercel
3. Check the Vercel function logs for any errors
4. Make sure the Google Apps Script "Execute as" is set to your account

### Need to update the script?

1. Go to your Google Apps Script editor
2. Make changes to the code
3. Click **Deploy** > **Manage deployments**
4. Create a new version when prompted
5. Copy the new URL and update the Vercel environment variable

## Environment Variable Configuration

The system supports three integration options:

1. **Google Sheets** (via Apps Script): `GOOGLE_APPS_SCRIPT_WEBHOOK_URL`
2. **General Webhook** (Discord, Slack, etc.): `WEBHOOK_URL`
3. **Both**: If both are configured, data goes to both services

## Support

For issues with:
- **Google Sheets setup**: Check Google Apps Script documentation
- **Vercel environment**: Check Vercel dashboard > Functions logs
- **Form functionality**: Review the `/app/api/service-request/route.ts` file
