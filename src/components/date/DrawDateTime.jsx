import { intl } from './intl-config';

const leadingNull = num => num < 10 ? `0${ num }` : `${ num }`;

export const ShortDateTime = ({date}) => {
  const theDate = new Date(date);
  return <>{leadingNull(theDate.getDate())}.{leadingNull(theDate.getMonth() + 1)}.{theDate.getFullYear()} {leadingNull(theDate.getHours())}:{leadingNull(theDate.getMinutes())}</>;
};

export const DrawDateTime = ({date}) => {
  const theDate = new Date(date);
  return <>{ intl.format(new Date(date)) }</>;
};