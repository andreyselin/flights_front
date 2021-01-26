export const extractValue = (formState, propertyPath) => {
  const props = propertyPath.split('.');
  if (props.length === 1) {
    return formState[props[0]];
  } else if (props.length === 2) {
    return formState[props[0]][props[1]];
  }
};
