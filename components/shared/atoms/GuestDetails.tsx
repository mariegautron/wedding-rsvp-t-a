import useIsAuthenticated from "@/utils/hooks/useIsAuthenticated";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { Card } from "antd";
import { FC } from "react";
import InvitationLink from "../../admin/atoms/InvitationLink";
import {
  TagDateInviteGuest,
  TagRepsponseComeWithSomeone,
  TagResponseCanComeWithSomeone,
  TagResponseIsPresent,
} from "./TagsResponses";

const GuestDetails: FC<{ guest: WeddingGuests }> = ({ guest }) => {
  const isAdmin = useIsAuthenticated();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {isAdmin && (
        <Card title="Détails de la personne invitée" style={{ flex: 1 }}>
          <>
            <p>
              <strong>Prénom :</strong> {guest?.firstname}
            </p>
            <p>
              <strong>Nom :</strong> {guest?.lastname}
            </p>
            <p>
              <strong>Email :</strong> {guest?.email}
            </p>
          </>

          <p>
            <strong>Peut être accompagné :</strong>{" "}
            <TagResponseCanComeWithSomeone
              canComeWithSomeone={guest.canComeWithSomeone}
            />
          </p>

          <InvitationLink uuid={guest.uuid} />

          <p>
            <strong>Statut d'envoi de l'invitation :</strong>
            <TagDateInviteGuest
              dateInvitSend={guest.dateInvitSend}
              invitSend={guest.invitSend}
            />
          </p>

          {guest.commentSend && (
            <p>
              <strong>Commentaire de l'invitation :</strong> {guest.commentSend}
            </p>
          )}
        </Card>
      )}

      <Card title="Réponses de la personne invitée" style={{ flex: 1 }}>
        <p>
          <strong>Réponse à l'invitation :</strong>{" "}
          <TagResponseIsPresent isPresent={guest.isPresent} />
        </p>

        {guest?.canComeWithSomeone && (
          <p>
            <strong>Accompagné :</strong>{" "}
            <TagRepsponseComeWithSomeone
              comeWithSomeone={guest.comeWithSomeone}
              guestOfGuestFirstname={guest.guestOfGuestFirstname}
              guestOfGuestLastname={guest.guestOfGuestLastname}
            />
          </p>
        )}
        {guest.message && (
          <p>
            <strong>Message :</strong> {guest.message || "Non spécifié"}
          </p>
        )}
      </Card>
    </div>
  );
};

export default GuestDetails;
