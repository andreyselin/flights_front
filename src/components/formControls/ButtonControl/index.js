import React from 'react';
import {ButtonInputLabelStyled, ButtonStyled} from "./ButtonControlStyled";

export const ButtonControl = ({onClick, buttonLabel}) => {

  const handleClick = e => {
    e && e.preventDefault();
    onClick();
  };

  return (
    <ButtonInputLabelStyled>
      <ButtonStyled
        onClick={handleClick}
      >{buttonLabel}</ButtonStyled>
    </ButtonInputLabelStyled>
  );
};
