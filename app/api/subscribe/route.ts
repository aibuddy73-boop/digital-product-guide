import { NextResponse } from 'next/server'

/**
 * Simple email capture endpoint.
 * 
 * Right now this stores emails in a JSON log file (Vercel KV or a database
 * can replace this later). When you add MailerLite or ConvertKit, swap the
 * implementation inside this handler — the frontend doesn't need to change.
 * 
 * POST body: { email: string, slug: string }
 */

// In-memory store for serverless (resets on cold start).
// For production, wire this to MailerLite, ConvertKit, or a database.
const subscribers: { email: string; slug: string; timestamp: string }[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, slug } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    // Log the subscriber (replace with real email service later)
    const entry = {
      email: email.trim().toLowerCase(),
      slug: slug || 'unknown',
      timestamp: new Date().toISOString(),
    }
    subscribers.push(entry)

    // Log to console so you can see captures in Vercel logs
    console.log('[SUBSCRIBE]', JSON.stringify(entry))

    return NextResponse.json({ success: true, message: 'Subscribed' })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
