export const getDeadlineDate = () => {
  const dateString = process.env.NEXT_PUBLIC_DEADLINE_DATE;

  const date = new Date(dateString!);

  const utcTimestamp = date.getTime() + date.getTimezoneOffset() * 60 * 1000;

  const parisDate = new Date(utcTimestamp);

  return parisDate;
};
