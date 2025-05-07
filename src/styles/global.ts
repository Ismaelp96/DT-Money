import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
}

html {
  font-size: 62.5%;
}

@media (max-width:  768px) {
  font-size: 55%;
}

body {
  background-color: ${({ theme }) => theme['gray-800']};
  color: ${({ theme }) => theme['gray-100']};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font: 400 1.6rem Roboto, sans-serif;
}

`;
