import React from 'react';
import {extractValue} from "../utilities";
import {NumberInputStyled, NumberInputLabelStyled} from './NumberInputControlStyled';

export const NumberInputControl = ({label, formState, updateFunction, propertyPath}) => {
  const value = extractValue(formState, propertyPath) || '';

  const handleChange = e =>
    updateFunction(
      propertyPath,
      parseInt(e.target.value),
      formState
    );

  return (
    <NumberInputLabelStyled>
      { label && <span>{ label }</span> }
      <NumberInputStyled
        type='number'
        value={value}
        onChange={handleChange}
      />
    </NumberInputLabelStyled>
  );
};
