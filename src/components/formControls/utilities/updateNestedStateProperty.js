export const updateNestedStateProperty = (
  path,
  newValue,
  currentState,
  setNewState,
  preSave
) => {

  const props = path.split('.');
  let newState;
  if (props.length === 1) {
    newState = {
      ...currentState,
      [ props[0] ] : newValue
    }
  }
  // Only 1 level nesting so far
  else {
    newState = {
      ...currentState,
      [ props[0] ] : {
        ...currentState[props[0]],
        [props[1]]: newValue
      }
    }
  }

  typeof preSave === 'function' && preSave(newState);
  setNewState(newState);
};
