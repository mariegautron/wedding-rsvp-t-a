export function booleanToString(
  value: boolean | undefined | null
): string | undefined {
  if (value === null || value === undefined) {
    return undefined;
  }

  return value ? "true" : "false";
}
