import React from 'react';
import {ButtonInputLabelStyled, ButtonStyled} from "./ButtonControlStyled";
import {InlineStyledButton} from "../utilities/basicFormStyles";

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

export const InlineButtonControl = ({onClick, buttonLabel}) => {

  const handleClick = e => {
    e && e.preventDefault();
    onClick();
  };

  return (
    <InlineStyledButton onClick={handleClick}>{buttonLabel}</InlineStyledButton>
  );
};
