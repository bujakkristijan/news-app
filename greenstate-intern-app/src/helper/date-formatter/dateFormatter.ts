export function convertDateFormat(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB");
}
