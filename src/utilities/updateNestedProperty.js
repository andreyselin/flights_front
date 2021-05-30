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
  else if (props.length === 2){
    newState = {
      ...currentState,
      [ props[0] ] : {
        ...currentState[props[0]],
        [props[1]]: newValue
      }
    }
  }
  else {
    newState = {
      ...currentState,
      [ props[0] ] : {
        ...currentState[props[0]],
        [props[1]]: {
          ...currentState[props[0]][props[1]],
          [props[2]]: newValue
        }
      }
    }
  }

  typeof preSave === 'function' && preSave(newState);
  setNewState(newState);
};
