export const prepareBasicSelectOptions = array => array
  .reduce(
    (acc, value) => {
      acc.push({value, label: value});
      return acc;
    },
    []
  );


export const withLeadingNull = input => input > 9 ? `${input}` : `0${input}`;

export const formatDateToString = (day, month, year, separator) =>
    `${withLeadingNull(day)}${separator}${withLeadingNull(month)}${separator}${withLeadingNull(year)}`;

/**
 * Plural forms for russian words
 * @param  {Integer} count quantity for word
 * @param  {Array} words Array of words. Example: ['депутат', 'депутата', 'депутатов'], ['коментарий', 'коментария', 'комментариев']
 * @return {String}        Count + plural form for word
 */
export const pluralize = (count, words) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return count + ' ' + words[ (count % 100 > 4 && count % 100 < 20) ? 2 : cases[ Math.min(count % 10, 5)] ];
};
