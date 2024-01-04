import { useMemo } from "react";
import { WeddingGuests } from "../types/weddinggests";
import { hasResponded } from "../functions/hasResponded";

function useGuestHasResponded(guest: WeddingGuests): boolean {
  const guestHasResponded: boolean = useMemo(() => {
    return hasResponded(guest);
  }, [guest.isPresent]);

  return guestHasResponded;
}

export default useGuestHasResponded;
