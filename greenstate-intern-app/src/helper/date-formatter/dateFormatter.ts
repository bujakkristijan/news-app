export function convertDateFormat(dateString: string): string {
  const months: { [key: string]: string } = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const parts: string[] = dateString.split(" ");
  const day: string = parts[2];
  const month: string = months[parts[1]];
  const year: string = parts[3];

  return `${day}/${month}/${year}`;
}
