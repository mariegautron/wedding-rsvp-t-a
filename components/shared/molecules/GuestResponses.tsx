import useIsAuthenticated from "@/utils/hooks/useIsAuthenticated";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { Collapse } from "antd";
import { FC } from "react";
import GuestDetails from "../atoms/GuestDetails";
import {
  TagEmailGuest,
  TagNameGuest,
  TagRepsponseComeWithSomeone,
  TagResponseCanComeWithSomeone,
  TagResponseIsPresent,
} from "../atoms/TagsResponses";

const { Panel } = Collapse;

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
            <p>
              <strong>Message :</strong> {guest.message}
            </p>
          )}
        </div>
      );
  }
};

export default GuestResponses;
