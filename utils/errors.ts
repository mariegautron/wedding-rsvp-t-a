export interface GuestUpdateError {
  type: "guestExists" | "updateError";
  message: string;
}
