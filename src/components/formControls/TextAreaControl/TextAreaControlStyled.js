import styled from "styled-components";
import {basicInputStyle, basicLabelStyle} from "../utilities/basicFormStyles";

export const TextAreaLabelStyled = styled.label`
  ${basicLabelStyle}
`;

export const TextAreaStyled = styled.textarea`
  ${basicInputStyle}
  height: 300px;
`;
