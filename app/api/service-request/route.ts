import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, hospital, phone, equipment, issue } = body

    if (!name || !hospital || !phone || !equipment || !issue) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate phone number format (basic validation)
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      )
    }

    // Log the service request
    console.log('[Service Request]', {
      timestamp: new Date().toISOString(),
      name,
      hospital,
      phone,
      equipment,
      issue,
    })

    // Try to send via webhook service if available
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: `New Service Request\n\nName: ${name}\nFacility: ${hospital}\nPhone: ${phone}\nEquipment: ${equipment}\nIssue: ${issue}`,
          }),
        })
      } catch (webhookError) {
        console.error('Webhook error:', webhookError)
      }
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Service request submitted successfully. We will contact you shortly.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Service request error:', error)
    return NextResponse.json(
      { error: 'Failed to submit service request. Please try again.' },
      { status: 500 }
    )
  }
}
