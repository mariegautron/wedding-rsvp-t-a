import useIsAuthenticated from "@/utils/hooks/useIsAuthenticated";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { Card } from "antd";
import { FC } from "react";
import InvitationLink from "../../admin/atoms/InvitationLink";
import {
  TagDateInviteGuest,
  TagDateResponseGuest,
  TagRepsponseComeWithSomeone,
  TagResponseCanComeWithSomeone,
  TagResponseIsPresent,
} from "./TagsResponses";

const GuestDetails: FC<{ guest: WeddingGuests }> = ({ guest }) => {
  const isAdmin = useIsAuthenticated();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {isAdmin && (
        <Card
          title={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Détails de la personne invitée</span>
              <TagDateInviteGuest
                dateInvitSend={guest.dateInvitSend}
                invitSend={guest.invitSend}
              />
            </div>
          }
          style={{ flex: 1 }}
        >
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

          {guest.commentSend && (
            <p>
              <strong>Commentaire de l'invitation :</strong> {guest.commentSend}
            </p>
          )}
        </Card>
      )}

      <Card
        style={{ flex: 1 }}
        title={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Réponses de la personne invitée</span>
            <TagDateResponseGuest
              isPresent={guest.isPresent}
              dateResponseSend={guest.dateResponseSend}
            />
          </div>
        }
      >
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
