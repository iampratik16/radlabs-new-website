import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, email, company, message } = await request.json();

        // Validate inputs
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, and message are required.' },
                { status: 400 }
            );
        }

        // Save to Google Sheet via Apps Script webhook
        const sheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
        if (!sheetWebhookUrl) {
            console.error('GOOGLE_SHEET_WEBHOOK_URL is not configured.');
            return NextResponse.json(
                { error: 'Server not configured. Please contact us directly at sales@radlabs.tech.' },
                { status: 500 }
            );
        }

        const sheetResponse = await fetch(sheetWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, company: company || '', message }),
        });

        if (!sheetResponse.ok) {
            throw new Error(`Sheet webhook responded with status: ${sheetResponse.status}`);
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { error: 'Failed to submit your message. Please try again.' },
            { status: 500 }
        );
    }
}
