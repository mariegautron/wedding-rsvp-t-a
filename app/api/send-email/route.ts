import { NextResponse } from "next/server";
import mailjet from "node-mailjet";

interface SendEmailParams {
  to: string;
  from: string;
  subject: string;
  variables: {
    message: string;
    url: string;
  };
}

const mailjetClient = mailjet.apiConnect(
  process.env.NEXT_PUBLIC_MAILJET_API_KEY || "",
  process.env.NEXT_PUBLIC_MAILJET_API_SECRET || ""
);

async function sendEmail({
  to,
  from,
  subject,
  variables,
}: SendEmailParams): Promise<any> {
  const emailData = {
    Messages: [
      {
        From: {
          Email: from,
          Name: "Thomas & Amélie",
        },
        To: [
          {
            Email: to,
          },
        ],
        TemplateID: 5512794,
        TemplateLanguage: true,
        Subject: subject,
        Variables: variables,
      },
    ],
  };

  try {
    const result = await mailjetClient
      .post("send", { version: "v3.1" })
      .request(emailData);
    console.log("Email sent successfully!");
    return result.body;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export async function POST(req: Request) {
  const body = await req.json();

  const { guestEmail, invitationMessage, guestUuid } = body;

  console.log(invitationMessage);

  try {
    await sendEmail({
      to: guestEmail,
      from: process.env.NEXT_PUBLIC_SENDER_EMAIL || "marigaut2@gmail.com",
      subject: "Invitation au mariage de Thomas & Amélie",
      variables: {
        message: invitationMessage,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}?uuid=${guestUuid}`,
      },
    });

    return new NextResponse({
      status: 200,
      body: { message: "Success: email was sent" },
    });
  } catch (error) {
    console.log(error);
    return new NextResponse({
      status: 500,
      body: { message: "COULD NOT SEND MESSAGE" },
    });
  }
}
