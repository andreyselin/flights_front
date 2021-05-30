const defaultMonthNames = [
  'January', 'February', 'March',     'April',   'May',      'June',
  'July',    'August',   'September', 'October', 'November', 'December'
];

const defaultWeekDays = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

//
//  !!! Month indexes start from 0 !
//

const getDateElements = date => {
  if (typeof date.getMonth === 'function') {
    return {
      date:  date.getDate(),
      month: date.getMonth(),
      year:  date.getFullYear(),
    }
  }
};

/*const isDate = input =>
  input && typeof input.getMonth === 'function';*/


/*const fillArray = (startNum, endNumber) => {
  const toReturn = [];
  for(let i = startNum; i <= endNumber; i++) {
    toReturn.push(i)
  }
  return toReturn;
};*/

export function createCalendarGenerator ({
  weekDayNames: weekDayNamesInput,
  monthNames:   monthNamesInput,
  yearOptions:  yearOptionsInput,
  limitDateBefore: limitDateBeforeInput,
  limitDateAfter: limitDateAfterInput
}) {
  const weekDayNames = Array.isArray(weekDayNamesInput) && weekDayNamesInput.length === 7
    ? weekDayNamesInput : defaultWeekDays;
  const monthNames = Array.isArray(monthNamesInput) && monthNamesInput.length === 12
    ? monthNamesInput : defaultMonthNames;

  return (dynamicOptions) => {
    const { month, year } = dynamicOptions;

    const now = new Date();

    const monthStartDate  = new Date(year, month,    1, 0, 0, 0, 0);
    const monthEndDate    = new Date(year, month +1, 0, 0, 0, 0, 0);
    const prevMothEndDate = new Date(year, month,    0, 0, 0, 0, 0);

    const preDaysCount    = monthStartDate.getDay(); // to start from sunday wrap with function
    const daysInMonth     = monthEndDate.getDate();
    const lastDayOfMonth  = monthEndDate.getDay();
    const daysInPrevMonth = prevMothEndDate.getDate();
    const today = getDateElements(now);

    const preDays = [];
    for (let day = daysInPrevMonth, days = 0; days < preDaysCount; day--, days++ ) {
      preDays.push({ day });
    }

    const monthDays = [];
    const limitDateAfterInMilliseconds = limitDateAfterInput ? limitDateAfterInput.getTime() : null;
    const limitDateBeforeInMilliseconds = limitDateBeforeInput ? limitDateBeforeInput.getTime() : null;

    for (let day = 1; day < daysInMonth + 1; day++) {
      if (limitDateAfterInMilliseconds || limitDateBeforeInMilliseconds) {
        const currentDate = new Date(year, month, day).getTime();
        let isActive = true;

        if (limitDateAfterInMilliseconds && limitDateBeforeInMilliseconds) {
          isActive = currentDate < limitDateAfterInMilliseconds && currentDate > limitDateBeforeInMilliseconds;
        } else if (limitDateAfterInMilliseconds) {
          isActive = currentDate < limitDateAfterInMilliseconds;
        } else {
          isActive = currentDate > limitDateBeforeInMilliseconds;
        }

        monthDays.push({ day, isActive });
      } else {
        monthDays.push({ day, isActive: true });
      }
    }

    const postDays = [];
    for (let day = 1; day < 6 - lastDayOfMonth + 1; day++) {
      postDays.push({ day });
    }

    return {
      preDays: preDays.sort((a, b) => a.day - b.day),
      monthDays, // All the days of a month
      postDays,
      today,
      isCurrentMonth: today.year === year && today.month === month,
      weekDayNames,
      monthNames,
      yearOptions: Array.isArray(yearOptionsInput) ? yearOptionsInput : [ today.year, today.year + 1, today.year + 2 ]
    };
  };
}

/**
 * Returns empty calendar
 * @return {object} calendar
 */
export const getEmptyCalendar = () => ({
  preDays: [],
  monthDays: [],
  postDays: [],
  today: {},
  isCurrentMonth: false,
  weekDayNames: [],
  monthNames: [],
  yearOptions: []
});
