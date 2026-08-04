# Download Links Configuration

## 📋 How to Update Download Links

The thank you page uses Google Drive links for file delivery. To update the links:

### 1. Upload Files to Google Drive

1. Go to your Google Drive
2. Create a folder called "Digital Product - Customer Downloads"
3. Upload all 5 files:
   - Stop Overthinking - The 7-Day Action System.pdf
   - Idea Filter + Buyer Worksheet.pdf
   - AI Digital Product Prompt Pack.pdf
   - First Launch Content Pack.pdf
   - First 30 Days After Launch Plan.pdf

### 2. Get Shareable Links

For EACH file:
1. Right-click → Share
2. Change to "Anyone with the link"
3. Set permission to "Viewer"
4. Copy link

**IMPORTANT:** Use "direct download" links, not "view" links.

**Convert the link format:**
- ❌ **View link:** `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
- ✅ **Download link:** `https://drive.google.com/uc?export=download&id=FILE_ID`

### 3. Update the Thank You Page

Edit `app/thank-you/page.tsx` and replace the placeholder links:

```typescript
const downloads = {
  mainGuide: 'https://drive.google.com/uc?export=download&id=YOUR_MAIN_GUIDE_FILE_ID',
  ideaFilter: 'https://drive.google.com/uc?export=download&id=YOUR_IDEA_FILTER_FILE_ID',
  aiPrompts: 'https://drive.google.com/uc?export=download&id=YOUR_AI_PROMPTS_FILE_ID',
  launchContent: 'https://drive.google.com/uc?export=download&id=YOUR_LAUNCH_CONTENT_FILE_ID',
  thirtyDayPlan: 'https://drive.google.com/uc?export=download&id=YOUR_30_DAY_PLAN_FILE_ID',
}
```

### 4. Deploy Changes

```bash
git add app/thank-you/page.tsx
git commit -m "Update download links"
git push
```

---

## 🔒 Security Considerations

### Current Setup (Good for Most Cases):
- Google Drive links are shareable but not indexed
- Anyone with link can download
- Simple, no friction for legitimate buyers

### If You Experience Link Sharing Issues:

**Option 1: Add Password Protection**
- Zip files with password
- Email password separately
- Tell customers password on thank-you page

**Option 2: Use Vercel Blob Storage**
- More control over access
- Can implement expiring links
- Requires more setup

**Option 3: Implement Watermarking**
- Use the PDF stamping script in `/scripts`
- Upload personalized versions per customer
- See `/scripts/README.md` for instructions

---

## 📊 Alternative Hosting Options

### Google Drive (Current - Free, Simple)
✅ Free unlimited storage  
✅ Reliable delivery  
✅ Simple setup  
❌ Links can be shared  
❌ No access control  

### Vercel Blob Storage (Premium)
✅ Direct control  
✅ Can implement expiring links  
✅ Better analytics  
❌ Costs money after free tier  
❌ More complex setup  

### Gumroad/SendOwl (Paid Services)
✅ Built for digital products  
✅ Handles delivery automatically  
✅ Anti-piracy features  
❌ Monthly fees  
❌ Takes commission  

---

## 🎯 Recommended Workflow

1. **For Now:** Use Google Drive links (free, simple)
2. **Monitor:** Check if links get shared publicly (Google your product name + "free download")
3. **If Leaked:** Implement watermarking or switch to protected hosting
4. **For Scale:** Consider dedicated digital product platform

---

## ⚡ Quick Link Format Converter

**Python script to convert Google Drive links:**

```python
def convert_to_download_link(view_link):
    # Extract FILE_ID from view link
    file_id = view_link.split('/d/')[1].split('/')[0]
    # Return download link
    return f'https://drive.google.com/uc?export=download&id={file_id}'

# Example usage:
view_link = "https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9/view?usp=sharing"
download_link = convert_to_download_link(view_link)
print(download_link)
# Output: https://drive.google.com/uc?export=download&id=1a2b3c4d5e6f7g8h9
```

---

## 📧 Customer Support Email Template

If a customer reports download issues:

```
Hi [Customer Name],

Thanks for your purchase!

If the download buttons aren't working, try these steps:

1. Check if you're logged into Google (sometimes Google Drive requires this)
2. Try a different browser (Chrome works best)
3. Use these direct download links:

Main Guide: [paste link]
Bonus 1: [paste link]
Bonus 2: [paste link]
Bonus 3: [paste link]
Bonus 4: [paste link]

Still having issues? Reply to this email and I'll send the files directly as email attachments.

Best,
Daniel
Hustle Talk With Daniel
```

---

## 🚀 Current Download Links (UPDATE THESE)

```typescript
// File: app/thank-you/page.tsx
const downloads = {
  mainGuide: 'https://drive.google.com/file/d/YOUR_FILE_ID_1/view?usp=sharing',
  ideaFilter: 'https://drive.google.com/file/d/YOUR_FILE_ID_2/view?usp=sharing',
  aiPrompts: 'https://drive.google.com/file/d/YOUR_FILE_ID_3/view?usp=sharing',
  launchContent: 'https://drive.google.com/file/d/YOUR_FILE_ID_4/view?usp=sharing',
  thirtyDayPlan: 'https://drive.google.com/file/d/YOUR_FILE_ID_5/view?usp=sharing',
}
```

**Status:** ⚠️ PLACEHOLDER LINKS - NEEDS UPDATE

---

Last updated: [Current Date]
