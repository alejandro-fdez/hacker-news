import {
  fromUnixTime,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from 'date-fns';

export const getFormattedDate = (unixTime: number) => {
  const nowDate = new Date();
  const date = fromUnixTime(unixTime);

  const minutesDiff = differenceInMinutes(nowDate, date);
  if (minutesDiff < 1) {
    return `Right now`;
  }
  const hoursDiff = differenceInHours(nowDate, date);
  if (hoursDiff < 1) {
    return `${minutesDiff} minutes ago`;
  }
  const daysDiff = differenceInDays(nowDate, date);
  if (daysDiff < 1) {
    return `${hoursDiff} hours ago`;
  }
  return `${daysDiff} days ago`;
};
