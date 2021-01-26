import React from 'react';
import {extractValue} from "../utilities";
import {TextAreaLabelStyled, TextAreaStyled} from "./TextAreaControlStyled";

export const TextAreaControl = ({formState, updateFunction, propertyPath}) => {
  const value = extractValue(formState, propertyPath);

  return (
    <TextAreaLabelStyled>
      <TextAreaStyled
        defaultValue={value}
        onChange={(e) => updateFunction(propertyPath, e.target.value, formState)}
      />
    </TextAreaLabelStyled>
    // <LabelStyled> </LabelStyled>
  );
};
