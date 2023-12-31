export type WeddingGuests = {
  id?: number;
  uuid: string;
  firstname: string;
  lastname: string;
  email: string;
  canComeWithSomeone: boolean;
  isPresent?: boolean;
  comeWithSomeone?: boolean;
  message?: string;
  guestOfGuestFirstname?: string;
  guestOfGuestLastname?: string;
};
