import { formatDate } from "@/utils/functions/formatDate";
import { NextResponse } from "next/server";
import mailjet from "node-mailjet";

interface SendEmailParams {
  to: string;
  from: string;
  subject: string;
  variables: {
    message: string;
    url: string;
    deadline: string;
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

  const deadline = formatDate(
    process.env.NEXT_PUBLIC_DEADLINE_DATE as unknown as Date
  );

  try {
    await sendEmail({
      to: guestEmail,
      from: process.env.NEXT_PUBLIC_SENDER_EMAIL || "marigaut2@gmail.com",
      subject: "Invitation au mariage de Thomas & Amélie",
      variables: {
        message: invitationMessage,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}?uuid=${guestUuid}`,
        deadline: deadline,
      },
    });

    return NextResponse.json(
      {
        message: "Success: email was sent",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: JSON.stringify(error),
      },
      {
        status: 500,
      }
    );
  }
}
