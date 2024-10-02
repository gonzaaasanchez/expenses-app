export function getFormattedDate(date: Date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}

export function getDateMinusDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
