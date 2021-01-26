import styled from 'styled-components';
import {
  basicBorder,
  basicBorderRadius, basicDoublePadding,
  basicInputStyle, basicPadding,
  BasicStyledInput,
  BasicStyledUl
} from "../utilities/basicFormStyles";

// export const ContainerStyled = styled.div`
//   padding: 0.15em 0.25em;;
//   border: 2px solid #151515;
//   height: 40px;
//   border-radius: 5px;
//   font-size: 14px;
// `;

export const ContainerStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const LabelStyled = styled.label`
  width: 100%;
  ${basicBorder}
  ${basicBorderRadius}
`;
  // display: inline-block;
  // width: 100%;

export const InputStyled = styled.input`
  ${ basicInputStyle }
  ${ basicDoublePadding }
`;

export const SelectsWrapperStyled = styled.div`
  display: flex;
`;

export const SelectWrapperStyled = styled.div`
  width: 50%;
  ${basicPadding}
`;

export const SelectStyled = styled.select`
  width: 100%;
  outline: none;
`;

export const ListStyled = styled(BasicStyledUl)`
  padding: 3px 0;
  flex-wrap: wrap;
`;

export const ItemStyled = styled.li`
  width: 14.285%;
  padding: 4px 0;
  text-align: center;
  cursor: pointer;
  ${
    props => props.variant === 'small'
      ? 'font-size: 0.75em; color: lightgray;'
      : ''
  }
`;

export const OverItemStyled = styled(ItemStyled)`
  color: lightgray;
  cursor: default;
`;

export const WrapperStyled = styled.div`
  position: fixed;
  display: ${ props => props.show ? 'block' : 'none' };
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  zIndex: 90;
`;

export const DropDownStyled = styled.div`
  display: ${ props => props.show ? 'block' : 'none' };
  position: absolute;
  backgroundColor: white;
  left: 0;
  bottom: 0;
  transform: translateY(101%);
  zIndex: 100;
  background: #fff;
  ${basicBorder}
  ${basicPadding}
  ${basicBorderRadius}
`;
