import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --light: white;
  --medium: #DCD6F7;
  --medium-dark: #A6B1E1;
  --primary-color: #EBEAEF;
  --dark: #424874;
  --more-dark: #333759;
  --green: #87bf63;
  --red: #BF5A5F;
  --box-shadow: rgba(149, 157, 165, 0.25) 0px 8px 24px;
  --light-grey: rgba(68, 68, 68, 0.1);
  --dark-grey: rgb(68, 68, 68);
  --box-shadow-light: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}


 * {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

html  { 
  @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }
  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }
}

body {
  background-color: var(--primary-color);
  -webkit-font-smoothing: antialiased;
}


body, input, textarea, button {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button { 
  cursor: pointer; 
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`;
