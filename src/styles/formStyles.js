import styled from 'styled-components';
import {globalStyles} from "./globalStyles";

const inputPadding = 'padding: 0.15em 0.25em;';

const formStyles = {
  inputPadding
};

export const FlightForm = styled.div`
  & .formRow {
    padding: 10px 0;
    // background: green;
  }
  & .formComment {
    color: #aaa;
    font-size: 0.85em;
    margin-bottom: 5px;
  }
`;


export const SelectStyled = styled.select`
    ${ globalStyles.font }
    ${ formStyles.inputPadding }
`;

export const InputStyled = styled.input`
  ${ globalStyles.font }
  ${ formStyles.inputPadding }
`;

export const FormButtonStyled = styled.button`
  ${ globalStyles.font }
  ${ formStyles.inputPadding }
`;

export const BoldLabel = styled.div`
  fontWeight: bold;
`;
