import styled from 'styled-components';

export const BasicDomElementStyled = `
  box-sizing: border-box;
`;

export const BasicStyledUl = styled.ul`
  display: flex;
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

export const basicLabelStyle = `
  display: flex;
  flex-direction: column;
  & span {
    margin-bottom: 8px;
  }
`;

const basicColors = {
  green1: '#7fd37f'
};
export const basicControlHeight = 'height: 30px;';
export const basicBorder = `
  border: 2px solid #000;
`;
export const basicBorderRadius = `
  border-radius: 5px;
`;
export const basicPadding       = `padding: 3px;`;
export const basicDoublePadding = `padding: 6px;`;

export const basicInputStyle = `
  background: none;
  width: 100%;
  border: none;
  outline: none;
  box-sizing: border-box;
  font-size: inherit;
  ${basicPadding}
`;
  // background: rgba(0,0,255,0.3);

export const basicInputBorderedStyle = `
  ${basicInputStyle}
  ${basicBorder}
  ${basicBorderRadius}
  ${basicDoublePadding}
  // ${basicControlHeight}
`;

export const BasicStyledInput = styled.input`
  ${ basicInputStyle }
`;


export const basicButtonStyle = `
  width: 100%;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: inherit;
  background: ${ basicColors.green1 };
  border: 2px solid #7fd37f;
  ${basicDoublePadding}
  ${basicBorderRadius}
`;

export const BasicStyledButton = styled.button`
  ${ basicButtonStyle }
`;
