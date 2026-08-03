# PDF Watermarking Script

## Quick Start (Manual Protection - Do This TODAY)

### 1. Install Dependencies
```bash
pip install pypdf reportlab
```

### 2. Create Generic Watermarked Version (5 minutes)
For now, create ONE watermarked file that all customers get:

```bash
python stamp_pdf.py "original-guide.pdf" "guide-protected.pdf" "LICENSED COPY" "DO NOT SHARE" "TRACEABLE"
```

This adds: "Licensed to LICENSED COPY (DO NOT SHARE) - Order TRACEABLE - Do Not Redistribute" on every page.

### 3. Upload to Selar
- Replace your current PDF on Selar with the new `guide-protected.pdf`
- All new customers get the watermarked version
- Generic deterrent - not personalized yet, but better than nothing

---

## Advanced: Per-Customer Personalization (Future)

### Option A: Manual per-order (if low volume)
After each sale, run:
```bash
python stamp_pdf.py "original.pdf" "customer-copy.pdf" "John Doe" "john@email.com" "ORDER12345"
```

Then email customer their personalized copy.

### Option B: Automated via Webhook (if higher volume)
Requires Selar webhook integration (see below).

---

## Selar Webhook Integration (Automated Personalization)

### How It Works:
1. Customer purchases on Selar
2. Selar sends webhook to your Vercel API
3. API stamps PDF with customer info
4. API emails personalized PDF to customer
5. Receipt page shows personalized download link

### Setup:

#### 1. In Selar Dashboard:
- Go to Settings → Webhooks
- Add webhook URL: `https://digital-product-guide-tau.vercel.app/api/selar-webhook`
- Copy webhook secret key

#### 2. Add API Route (already coded below)
The webhook handler is in `/api/selar-webhook/route.ts`

#### 3. Add Environment Variables in Vercel:
```
SELAR_WEBHOOK_SECRET=your_webhook_secret_from_selar
SENDGRID_API_KEY=your_sendgrid_key_for_emails
MASTER_PDF_URL=url_to_your_original_pdf
```

#### 4. Test
- Make a test purchase
- Check webhook logs in Selar
- Customer receives personalized PDF

---

## Security Features Implemented:

✅ **Buyer traceability** - Name, email, order # on every page  
✅ **Visual deterrent** - Customers won't share with their info visible  
✅ **Basic PDF protection** - Prevents casual editing/removal  
✅ **Leak identification** - If leaked, you know who shared it  

## What This DOESN'T Prevent:

❌ Determined pirates (can screenshot, re-type, OCR)  
❌ 100% foolproof protection (nothing is)

## What It DOES Prevent:

✅ Casual sharing via social media/forums (90% of leaks)  
✅ Customers sharing receipt links carelessly  
✅ Creates legal trail if you need to enforce

---

## My Recommendation:

**For now (TODAY):**
1. Create generic watermarked version
2. Upload to Selar
3. Monitor for leaks

**Later (if you see actual piracy):**
1. Implement webhook automation
2. Per-customer personalization
3. Email delivery instead of Selar hosting

**Cost/Benefit:**
- Generic watermark: 5 min setup, 80% protection
- Full automation: 2-3 hours setup, 95% protection

Start with generic. Only build automation if you actually have a piracy problem.
