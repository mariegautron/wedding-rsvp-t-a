import { WeddingGuests } from "../types/weddinggests";

export function hasResponded(isPresent: WeddingGuests["isPresent"]): boolean {
  return isPresent === true || isPresent === false;
}
