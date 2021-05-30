import styled from 'styled-components';
import {
  basicBorder,
  basicBorderRadius, basicDoublePadding,
  basicInputStyle, basicPadding,
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

  .item {
    width: 14.285%;
    padding: 4px 0;
    text-align: center;
  }
  
  .item--active {
    cursor: pointer;
    background-color: transparent;
    transition: background-color .5s;
    
    &:hover {
      background-color: cornflowerblue;
    }
  }
  
  .item--small {
    font-size: 0.75em;
    color: lightgray;
    cursor: default;
  }
  
  .item--over {
    color: lightgray;
    cursor: default;
  }
  
  .item--disabled {
    position: relative;
    cursor: default;
    
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 50%;
      height: 2px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      background-color: indianred;
      opacity: .6;
    }
    
    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;

export const WrapperStyled = styled.div`
  position: fixed;
  display: ${ props => props.show ? 'block' : 'none' };
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
`;

export const DropDownStyled = styled.div`
  display: ${ props => props.show ? 'block' : 'none' };
  position: absolute;
  background-color: white;
  left: 0;
  bottom: 0;
  transform: translateY(101%);
  z-index: 100;
  ${basicBorder}
  ${basicPadding}
  ${basicBorderRadius}
`;
