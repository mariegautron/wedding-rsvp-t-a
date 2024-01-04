import { WeddingGuests } from "../types/weddinggests";

export function hasResponded(guest: WeddingGuests): boolean {
  return guest.isPresent === true || guest.isPresent === false;
}
