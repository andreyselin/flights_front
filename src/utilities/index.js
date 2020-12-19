export const prepareBasicSelectOptions = array => array
  .reduce(
    (acc, value) => {
      acc.push({value, label: value});
      return acc;
    },
    []
  );
