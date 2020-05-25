import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

body{
    margin: 0 !important;
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 300;
    background: white;
  }
  header{
    position: fixed;
    width: 100%;
    height: 60px;
    padding: 5px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    z-index: 2;
    @media(min-width: ${({ theme }) => theme.breakpoints.sm}px){
      padding: 10px 0;
    }
    @media(min-width: ${({ theme }) => theme.breakpoints.md}px){
      padding: 15px 0;
    }
  }
  button{
    background: none;
    border: none;
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 300;
  }

`;
export default GlobalStyles;
