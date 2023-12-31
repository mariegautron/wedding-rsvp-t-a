export const sendEmail = async (
  guestEmail: string,
  invitationMessage: string,
  guestUuid: string
) => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({ guestEmail, invitationMessage, guestUuid }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Email sent successfully!");
      // Gérer la confirmation à l'utilisateur ici
    } else {
      console.error("Failed to send email");
      // Gérer l'échec d'envoi à l'utilisateur ici
    }
  } catch (error) {
    console.error("Error sending email:", error);
    // Gérer les erreurs à l'utilisateur ici
  }
};
