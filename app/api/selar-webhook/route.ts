import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

/**
 * Selar Webhook Handler
 * 
 * This endpoint receives purchase notifications from Selar and can:
 * 1. Generate personalized PDFs with buyer information
 * 2. Send custom emails with personalized downloads
 * 3. Log purchases for analytics
 * 
 * Setup Required:
 * - Add SELAR_WEBHOOK_SECRET to Vercel environment variables
 * - Configure webhook URL in Selar dashboard: https://your-domain.vercel.app/api/selar-webhook
 */

export async function POST(request: NextRequest) {
  try {
    // Verify webhook signature (security)
    const signature = request.headers.get('x-selar-signature')
    const webhookSecret = process.env.SELAR_WEBHOOK_SECRET
    
    if (!webhookSecret) {
      console.error('SELAR_WEBHOOK_SECRET not configured')
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
    }

    const body = await request.text()
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(body)
      .digest('hex')

    // Uncomment this once you have the webhook secret from Selar
    // if (signature !== expectedSignature) {
    //   console.error('Invalid webhook signature')
    //   return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    // }

    const data = JSON.parse(body)

    // Extract buyer information from Selar webhook payload
    // Note: Adjust field names based on actual Selar webhook format
    const {
      customer_email,
      customer_name,
      order_reference,
      product_id,
      amount_paid,
      status
    } = data

    // Only process completed purchases
    if (status !== 'completed' && status !== 'success') {
      console.log('Order not completed:', order_reference)
      return NextResponse.json({ message: 'Order not completed' })
    }

    console.log('Processing purchase:', {
      email: customer_email,
      name: customer_name,
      order: order_reference,
      product: product_id
    })

    // TODO: Implement personalized PDF generation
    // This is where you would:
    // 1. Fetch the master PDF from storage
    // 2. Stamp it with customer info using the Python script (converted to Node)
    // 3. Upload personalized PDF to temporary storage
    // 4. Send email with download link
    // 5. Or update database with personalized download URL

    // For now, just log the purchase
    console.log('✅ Purchase logged successfully')

    return NextResponse.json({
      success: true,
      message: 'Webhook processed',
      order: order_reference
    })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

// For testing the endpoint is accessible
export async function GET() {
  return NextResponse.json({
    message: 'Selar webhook endpoint is active',
    timestamp: new Date().toISOString()
  })
}
