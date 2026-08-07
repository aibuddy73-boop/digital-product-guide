# Email Collection Setup Guide

## How It Works

When someone enters their email on your site (free lead magnet or exit-intent modal), 
it hits `/api/subscribe` which sends the data to a Google Sheet you own.

You can open the sheet anytime to see all collected emails.

---

## Setup (5 minutes, one-time)

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: `Hustle Talk - Email Subscribers`
4. In Row 1, add these headers:
   - A1: `Email`
   - B1: `Slug`
   - C1: `Timestamp`

### Step 2: Add the Apps Script

1. In your sheet, go to **Extensions → Apps Script**
2. Delete any existing code
3. Paste this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.email,
    data.slug,
    data.timestamp
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (Ctrl+S)
5. Name the project: `Email Webhook`

### Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon → Select **Web app**
3. Settings:
   - Description: `Email subscriber webhook`
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Click **Authorize access** → choose your Google account → Allow
6. **Copy the Web App URL** (looks like `https://script.google.com/macros/s/ABC.../exec`)

### Step 4: Add to Vercel

1. Go to [Vercel Dashboard](https://vercel.com) → your project → Settings → Environment Variables
2. Add a new variable:
   - Name: `GOOGLE_SHEET_WEBHOOK`
   - Value: (paste the URL from Step 3)
   - Environment: Production, Preview, Development
3. Click Save
4. **Redeploy** your project (Deployments tab → 3-dot menu → Redeploy)

### Step 5: Test It

1. Visit your free lead magnet page: `/free/ai-side-hustle-starter-kit`
2. Enter a test email
3. Check your Google Sheet — the row should appear within seconds

---

## Where to See Your Subscribers

- **Google Sheet**: Open anytime at sheets.google.com
- **Vercel Logs**: Dashboard → Project → Logs → search for `[SUBSCRIBE]`

---

## What Each "Slug" Means

| Slug | Where it came from |
|------|-------------------|
| `ai-side-hustle-starter-kit` | Free lead magnet page or exit-intent modal |
| `exit-intent` | Exit-intent popup on main sales page |

---

## Upgrading to MailerLite (When You're Ready)

When you hit 100+ subscribers and want to send automated emails:

1. Sign up at [MailerLite](https://www.mailerlite.com) (free up to 1,000 subscribers)
2. Get your API key from Settings → Integrations → API
3. Add `MAILERLITE_API_KEY` to Vercel env vars
4. Update `/app/api/subscribe/route.ts` to call the MailerLite API
5. Set up an automation: "When subscriber joins → send welcome email with PDF links"

This lets you implement the email sequence:
- Day 0: Starter Kit (immediate)
- Day 2: 7 AI Prompts PDF
- Day 4: 50 AI Prompts PDF  
- Day 6: Pitch 100 Ideas (₦1,999)
- Day 8: Pitch 7-Day System (₦4,800)

---

## Free PDF Links (for reference)

| PDF | Google Drive Link |
|-----|------------------|
| AI Side Hustle Starter Kit | https://drive.google.com/file/d/1Xj8FhYVRTsHQ1d4uSwj_bWv9QdtlSSRw/view?usp=sharing |
| 7 AI Prompts That Help You Finish Your First eBook | https://drive.google.com/file/d/1lXgbmbJQD_O0xnB6FOt6xN1yraqJHjzg/view?usp=sharing |
| 7-AI-Prompts-Finish-Your-First-Ebook (variant) | https://drive.google.com/file/d/1XiYBf7AbkwPJoaihMdap3CVortt7VBzN/view?usp=sharing |
| 50 AI Prompts That Turn Ideas Into Digital Products | https://drive.google.com/file/d/14O3b-63lxflXNOMl_VwwN53-dqCR9gbk/view?usp=sharing |
| 100 Digital Product Ideas You Can Create With AI | https://drive.google.com/file/d/15U68-1BbzS75FZ-oU27ykG4omE6IKCoZ/view?usp=sharing |
