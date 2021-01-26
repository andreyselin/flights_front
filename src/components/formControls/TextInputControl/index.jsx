import React from 'react';
import {extractValue} from "../utilities";
import {TextInputStyled, TextInputLabelStyled} from './TextInputControlStyled';
import {NumberInputLabelStyled} from "../NumberInputControl/NumberInputControlStyled";

export const TextInputControl = ({label, formState, placeholder, updateFunction, propertyPath}) => {
  const value = extractValue(formState, propertyPath) || '';

  return (
    <TextInputLabelStyled>
      { label && <span>{ label }</span> }
      <TextInputStyled
        placeholder={placeholder}
        type='text'
        value={value}
        onChange={(e) => updateFunction(propertyPath, e.target.value, formState)}
      />
    </TextInputLabelStyled>
  );
};
