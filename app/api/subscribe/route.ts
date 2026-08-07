import { NextResponse } from 'next/server'

/**
 * Email capture endpoint.
 * 
 * Stores subscribers in two places:
 * 1. Vercel Function logs (always — visible in Vercel Dashboard → Logs)
 * 2. Google Sheets via Apps Script webhook (if GOOGLE_SHEET_WEBHOOK env var is set)
 * 
 * To set up Google Sheets storage:
 * 1. Create a Google Sheet with headers: Email | Slug | Timestamp
 * 2. Go to Extensions → Apps Script
 * 3. Paste the doPost function (see EMAIL_SETUP.md)
 * 4. Deploy as Web App (Anyone can access)
 * 5. Copy the URL and set it as GOOGLE_SHEET_WEBHOOK in Vercel env vars
 * 
 * POST body: { email: string, slug: string }
 */

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, slug } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const entry = {
      email: email.trim().toLowerCase(),
      slug: slug || 'unknown',
      timestamp: new Date().toISOString(),
    }

    // Always log to Vercel console (visible in dashboard)
    console.log('[SUBSCRIBE]', JSON.stringify(entry))

    // Send to Google Sheet if webhook is configured
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(entry),
        })
      } catch (err) {
        // Don't fail the user request if sheet write fails
        console.error('[SUBSCRIBE] Sheet webhook failed:', err)
      }
    }

    return NextResponse.json({ success: true, message: 'Subscribed' })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
