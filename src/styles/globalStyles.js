import { createGlobalStyle } from 'styled-components'

const fontSize = 'font-size: 18px;';
const fontFamily = `font-family: 'Roboto', sans-serif;`;
const font = `${fontFamily}${fontSize}`;

export const globalStyles = {
  fontSize,
  fontFamily,
  font,
};

export const GlobalStyleComponent = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  
  html, body {
    ${ globalStyles.font }
  }
`;
