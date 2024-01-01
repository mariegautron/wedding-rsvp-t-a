import { WeddingGuests } from "@/utils/types/weddinggests";
import InvitationLink from "../atoms/InvitationLink";
import {
  TagEmailGuest,
  TagNameGuest,
  TagRepsponseComeWithSomeone,
  TagResponseCanComeWithSomeone,
  TagResponseIsPresent,
} from "../atoms/TagsResponses";
import { FC } from "react";
import useIsAuthenticated from "@/utils/hooks/useIsAuthenticated";

const GuestResponses: FC<{
  guest: WeddingGuests;
  variant?: "big" | "small";
}> = ({ guest, variant = "small" }) => {
  const isAdmin = useIsAuthenticated();

  switch (variant) {
    case "big":
      return (
        <div>
          {isAdmin && (
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
          )}
          {isAdmin && <InvitationLink uuid={guest.uuid} />}
          <p>
            <strong>Réponse :</strong>{" "}
            <TagResponseIsPresent isPresent={guest.isPresent} />
          </p>
          {isAdmin && (
            <p>
              <strong>Peut venir avec quelqu'un :</strong>{" "}
              <TagResponseCanComeWithSomeone
                canComeWithSomeone={guest.canComeWithSomeone}
              />
            </p>
          )}
          {guest?.canComeWithSomeone && (
            <p>
              <strong>Vient avec :</strong>{" "}
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
        </div>
      );

    case "small":
      return (
        <div className="isAdmin py-10">
          {isAdmin && (
            <>
              <TagNameGuest
                firstname={guest.firstname}
                lastname={guest.lastname}
              />
              <TagEmailGuest email={guest.email} />
            </>
          )}
          <TagResponseIsPresent isPresent={guest.isPresent} />
          {isAdmin && (
            <TagResponseCanComeWithSomeone
              canComeWithSomeone={guest.canComeWithSomeone}
            />
          )}
          {guest?.canComeWithSomeone && (
            <TagRepsponseComeWithSomeone
              comeWithSomeone={guest.comeWithSomeone}
              guestOfGuestFirstname={guest.guestOfGuestFirstname}
              guestOfGuestLastname={guest.guestOfGuestLastname}
            />
          )}
          {guest.message && (
            <>
              <strong>Message :</strong> {guest.message || "Non spécifié"}
            </>
          )}
        </div>
      );
  }
};

export default GuestResponses;
