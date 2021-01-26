import styled from 'styled-components';
import {
  basicBorder,
  basicBorderRadius,
  basicPadding,
  BasicStyledInput,
  BasicStyledUl
} from "../utilities/basicFormStyles";

export const LabelStyled = styled.label`
  display: block;
  width: 100%;
  position: relative;
`;

  // ${basicInputStyle}
export const BlockStyled = styled.div`
  ${basicPadding}
  ${basicBorder}
  ${basicBorderRadius}
`;

// export const BlockStyled = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0.15em 0.25em;;
//   border: 2px solid blue;
//   border-radius: 5px;
//   min-height: 40px;
// `;

export const SelectedListStyled = styled(BasicStyledUl)`
  flex-wrap: wrap;
  align-items: center;
`;

  // padding: 0 3px;
export const SelectedItemStyled = styled.li`
  ${basicPadding}
`;

  // padding: 2px 4px;
export const SelectedItemTextStyled = styled.div`
  ${basicPadding}
  padding-left: 6px;
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  background: #7c37f2;
  &:hover {
    background: #6222cf;
  }
`;

export const InputSearchStyled = styled(BasicStyledInput)`
  flex: 1 1;
  min-width: 64px;
`;
export const InputSearchContainerStyled = styled.li`
  flex-grow: 1;
`;

export const ListStyled = styled(BasicStyledUl)`
  flex-direction: column;
`;

export const WrapperStyled = styled.div((prop) => ({
  position: 'fixed',
  display: prop.show ? 'block' : 'none',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
}));

export const DropDownStyled = styled.div((prop) => ({
  display: prop.show ? 'block' : 'none',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  maxHeight: '200px',
  overflowY: 'auto',
  padding: '0.15em 0.25em',
  border: '2px solid #151515',
  borderRadius: '5px',
  zIndex: 100,
  transform: 'translateY(100%)',
  backgroundColor: '#fff',
}));
