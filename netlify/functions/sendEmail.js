import { smtpexpressClient } from "../../src/constants/Smtp";

export const handler = async (event) => {
  try {
    const { email, message } = JSON.parse(event.body);

    await smtpexpressClient.sendApi.sendMail({
      subject: "Valentine's Date",
      message: `<h2>${message}</h2>`,
      sender: {
        name: "Babe",
        email: "babe-1eed1b@smtpexpress.email", // Your SMTP Express sender email
      },
      recipients: {
        email: email, // Recipient
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email sent!" }),
    };
  } catch (error) {
    console.error("Email Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
