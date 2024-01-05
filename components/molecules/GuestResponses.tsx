import { WeddingGuests } from "@/utils/types/weddinggests";
import InvitationLink from "../atoms/InvitationLink";
import {
  TagDateInviteGuest,
  TagEmailGuest,
  TagNameGuest,
  TagRepsponseComeWithSomeone,
  TagResponseCanComeWithSomeone,
  TagResponseIsPresent,
} from "../atoms/TagsResponses";
import { FC } from "react";
import useIsAuthenticated from "@/utils/hooks/useIsAuthenticated";
import { Card, Collapse } from "antd";
import { formatDate } from "@/utils/functions/formatDate";
import GuestDetails from "../atoms/GuestDetails";

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
        <div className="isAdmin py-10">
          <Collapse accordion>
            <Panel
              header="Voir tes réponses"
              key="1"
              style={{ backgroundColor: "transparent" }}
            >
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
                  <strong>Message :</strong> {guest.message || "Non spécifié"}
                </p>
              )}
            </Panel>
          </Collapse>
        </div>
      );
  }
};

export default GuestResponses;
