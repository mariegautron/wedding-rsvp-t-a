import useIsAuthenticated from "@/utils/hooks/useIsAuthenticated";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { FC } from "react";
import GuestDetails from "../atoms/GuestDetails";
import {
  TagEmailGuest,
  TagNameGuest,
  TagRepsponseComeWithSomeone,
  TagResponseCanComeWithSomeone,
  TagResponseIsPresent,
} from "../atoms/TagsResponses";

const GuestResponses: FC<{
  guest: WeddingGuests;
  variant?: "big" | "small";
}> = ({ guest, variant = "small" }) => {
  const isAdmin = useIsAuthenticated();

  switch (variant) {
    case "big":
      return <GuestDetails guest={guest} />;

    case "small":
      return (
        <div>
          {isAdmin && (
            <>
              <TagNameGuest
                firstname={guest.firstname}
                lastname={guest.lastname}
              />
            </>
          )}
          <TagResponseIsPresent isPresent={guest.isPresent} isAdmin={isAdmin} />
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
              isAdmin={isAdmin}
            />
          )}
          {guest.email && <TagEmailGuest email={guest.email} />}

          {guest.message && (
            <p>
              <strong>Message :</strong> {guest.message}
            </p>
          )}
        </div>
      );
  }
};

export default GuestResponses;
