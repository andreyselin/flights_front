const defaultMonthNames = [
  'January', 'February', 'March',     'April',   'May',      'June',
  'July',    'August',   'September', 'October', 'November', 'December'
];

const defaultWeekDays = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

export const getCalendarInfo = ({
  month,
  year,

  // Optionals:
  yearOptions,
  monthNames,
  weekDayNames,
}) => {
  const monthStartDate = new Date(year, month, 1, 0, 0, 0, 0);
  const daysInMonth = (new Date(year, month+1, 0, 0, 0, 0, 0)).getDate();
  const lastDayOfMonth = (new Date(year, month+1, 0, 0, 0, 0, 0)).getDay();
  const daysInPrevMonth = (new Date(year, month, 0, 0, 0, 0, 0)).getDate();
  const preDaysCount = monthStartDate.getDay();
  const now = new Date();
  const today = {
    date:  now.getDate(),
    month: now.getMonth(),
    year:  now.getFullYear(),
  };

  const preDays = [];
  for (let i = daysInPrevMonth, days=0; days < preDaysCount; i--, days++ ) {
    preDays.push(i);
  }

  const monthDays = [];
  for (let i = 1; i < daysInMonth+1; i++) {
    monthDays.push(i);
  }

  const postDays = [];
  for (let i = 1; i < 6-lastDayOfMonth+1; i++) {
    postDays.push(i);
  }

  return {
    preDays: preDays.sort((a,b)=>a-b),
    monthDays,
    postDays,
    today,
    isCurrentMonth: today.year === year && today.month === month,
    weekDayNames: Array.isArray(weekDayNames) && weekDayNames.length === 7
      ? weekDayNames : defaultWeekDays,
    monthNames:   Array.isArray(monthNames) && monthNames.length === 12
      ? monthNames : defaultMonthNames,
    yearOptions:  Array.isArray(yearOptions)
      ? yearOptions : [ today.year, today.year + 1, today.year + 2 ]
  };
};
