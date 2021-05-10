import  { createGlobalStyle }  from 'styled-components';
import styled from 'styled-components'

const backgroundColor = '#fff';
const fontStyle = 'sans-serif';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    outline: 0;
  }
`

export const PageWrap = styled.div`
  min-height: 100vh;
  min-width: 500px;
  box-sizing: border-box;
  background: ${backgroundColor};
  -webkit-font-smoothing: antialiased;
  font-family: 'Roboto', ${fontStyle};
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    zoom: 60%;
    display: block;
  }
`;
