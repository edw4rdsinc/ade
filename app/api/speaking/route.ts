import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, organization, eventType, date, topic, message } = body;

    // Validate required fields
    if (!name || !email || !eventType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const eventTypeLabels: Record<string, string> = {
      academic: "Academic Conference",
      public: "Public Lecture",
      book: "Book Talk",
      media: "Media/Interview",
      podcast: "Podcast",
      other: "Other",
    };

    const topicLabels: Record<string, string> = {
      "money-crypto": "Who Gets to Make Money? (Cryptocurrency & History)",
      "history-matters": "Why History Matters Now",
      book: "Money and the Making of the American Revolution",
      "global-capitalism": "The Global History of Capitalism",
      other: "Other / General",
    };

    await resend.emails.send({
      from: "Speaking Inquiries <noreply@andrewdavidedwards.com>",
      to: ["ade3@st-andrews.ac.uk"],
      replyTo: email,
      subject: `Speaking Inquiry: ${eventTypeLabels[eventType] || eventType}`,
      html: `
        <h2>New Speaking Inquiry</h2>

        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ""}
        <p><strong>Event Type:</strong> ${eventTypeLabels[eventType] || eventType}</p>
        ${date ? `<p><strong>Proposed Date:</strong> ${date}</p>` : ""}
        ${topic ? `<p><strong>Topic of Interest:</strong> ${topicLabels[topic] || topic}</p>` : ""}

        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>

        <hr>
        <p style="color: #666; font-size: 12px;">
          This inquiry was sent from andrewdavidedwards.com
        </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send speaking inquiry:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
