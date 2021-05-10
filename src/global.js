import  { createGlobalStyle }  from 'styled-components';
import styled from 'styled-components'

const backgroundColor = '#fff';
const fontStyle = 'sans-serif';

 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    outline: 0;
    min-height: 100vh;

    @media only screen and (max-width: 650px){
      zoom: 0;
    }
  }
`

export const PageWrap = styled.div`
  height: 100vh;
  background: ${backgroundColor};
  font-family: 'Roboto', ${fontStyle};
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
