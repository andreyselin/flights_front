import styled from 'styled-components';
import {globalStyles} from "./globalStyles";

const inputPadding = 'padding: 0.15em 0.25em;';
const inputBorders = 'border: 2px solid #151515; border-radius: 5px;';

const formStyles = {
  inputPadding,
  inputBorders
};

export const FlightForm = styled.div`
  margin: 20px auto;
  width: 80%;
  display: flex;
  flex-direction: column;

  & .formSection {
    display: flex;
  }
  & .formBlock {
    width:50%;
  }

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
  ${ formStyles.inputBorders }
`;

export const InputStyled = styled.input`
  ${ globalStyles.font }
  ${ formStyles.inputPadding }
  ${ formStyles.inputBorders }
`;

export const FormButtonStyled = styled.button`
  ${ globalStyles.font }
  ${ formStyles.inputPadding }
`;

export const HorizontalSeparator = styled.div`
  width: 100%;
  border-top: 2px solid #eee;
  margin: 10px 0;
`;

export const BoldLabel = styled.div`
  fontWeight: bold;
`;
