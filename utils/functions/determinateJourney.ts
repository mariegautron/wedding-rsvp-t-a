import { WeddingGuests } from "../types/weddinggests";

export type JourneyStep =
  | "isPresent"
  | "comeWithSomeone"
  | "guestOfGuest"
  | "message"
  | "dommage"
  | "confirmation"
  | "email";

export const determineJourney = (
  guest: Partial<WeddingGuests>
): JourneyStep[] => {
  const journey: JourneyStep[] = ["isPresent"];

  if (guest.isPresent) {
    if (guest.canComeWithSomeone) {
      journey.push("comeWithSomeone");

      if (guest.comeWithSomeone) {
        journey.push("guestOfGuest");
        journey.push("email");
        journey.push("message");
        journey.push("confirmation");
      } else {
        journey.push("email");
        journey.push("message");
        journey.push("confirmation");
      }
    } else {
      journey.push("email");
      journey.push("message");
      journey.push("confirmation");
    }
  } else {
    journey.push("message");
    journey.push("dommage");
  }

  return journey;
};
