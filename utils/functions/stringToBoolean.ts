export function stringToBoolean(str: string | null | undefined): boolean {
  if (str === "true") {
    return true;
  } else if (str === "false") {
    return false;
  } else {
    return str ? Boolean(str) : false;
  }
}
