import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const { type, sheet, timestamp } = await request.json()

    console.log(`Webhook received: ${type} from ${sheet} at ${timestamp}`)

    // Revalidate appropriate data based on sheet type
    switch (type) {
      case 'menu_update':
        revalidatePath('/restaurant')
        revalidatePath('/api/weekly-menu')
        break
      case 'faq_update':
        revalidatePath('/hotel/faq')
        revalidatePath('/api/faqs')
        break
      default:
        // Revalidate all if unsure
        revalidatePath('/restaurant')
        revalidatePath('/api/weekly-menu')
        revalidatePath('/hotel/faq')
        revalidatePath('/api/faqs')
    }

    return NextResponse.json({
      success: true,
      revalidated: type,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}