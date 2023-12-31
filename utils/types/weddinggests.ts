export type WeddingGuests = {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  canComeWithSomeone: boolean;
  isPresent?: boolean;
  comeWithSomeone?: boolean;
};
