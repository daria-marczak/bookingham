import { createGlobalStyle, css } from 'styled-components';

export const fontUrl =
  'https://fonts.googleapis.com/css2?family=Bree+Serif&family=Raleway:wght@300;400;600;700&display=swap';

export const bodyStyles = css`
  font-family: 'Raleway', sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Raleway', sans-serif;
  }
`;
