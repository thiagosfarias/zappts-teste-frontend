import styled, { keyframes, css } from 'styled-components'

import theme from '../theme';

export const Button = styled.button`
  border: none; 
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: ${theme.buttonPadding};
  height: ${theme.buttonHeight};
  width: ${theme.buttonWidth};
  border-radius: ${theme.buttonBorderRadius};   
  background-color: ${theme.secondaryColor};
  color: white;
  cursor: pointer;
  font: normal normal normal 14px/20px;
  font-family: 'Mulish', sans-serif;
  
  @media only screen and (max-width: 600px){
    font-size: 18px;
  }
`

export const Container = styled.div`
  display: flex;
  width: 50%;
  min-width: ${theme.minHeight};
  min-height: ${theme.minWidth};
  display: flex;
  flex: ${theme.wraper};
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  
  form {
    width: 75%;
  }

  a.link{
    margin-left: 5px;
    margin-top: ${theme.mediumMarginSize};
    font-size: ${theme.secondaryFontSize};
    font-family: 'Melish', sans-serif;
    text-decoration: underline ${theme.primaryColor};
    color: ${theme.primaryColor};
  }

  span{
    font-size: ${theme.secondaryFontSize};
    color: ${theme.secondaryColor}
    font-family: 'Melish', sans-serif;
  }

  a {
    text-decoration: none;
    text-align: end;
    color: ${theme.secondaryColor};
  }

  h2 {
    text-align: left;
    font: normal normal normal 30px/38px;
    font-family: 'Mulish', sans-serif;
    letter-spacing: 0px;
    color: ${theme.secondaryColor};
    opacity: 1;
  }

  span.error{
    margin-top: ${theme.mediumMarginSize};
    color: ${theme.errorColor};
  }

  @media only screen and (max-width: 600px) {
    a, a.link{
      font-size: 16px;
    }
    h2 {
      margin-top: 35px;
    };
    span{
      font-size: 18px;
    }
  }
`;


export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${theme.secondaryFontSize};
  margin-top: 1rem;
  margin-bottom: ${theme.littleMarginSize};
  font: normal normal normal 16px/20px;
  font-family: 'Mulish', sans-serif;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;

  input {
    padding: ${theme.defaultVerticalPaddingSize};
    outline: none;
    font-size: ${theme.principalFontSize};
    text-align: left;
    border: none;
    border-bottom: ${theme.commonBorderStyle} ${theme.tertiaryColor};
    ${props => props.hasError && css`border-bottom: ${theme.commonBorderStyle} ${theme.errorColor};`};
  }


  span {
    display: block;
    margin: ${theme.littleMarginSize};
    color: ${theme.errorColor};
  }

  @media only screen and (max-width: 600px) {
    font-size: 22px;
    span {
      font-size: 18px;
    }

    input, input::placeholder {
      font-size: 22px;
    }

  }

  ${props => {
    if(props.hasError){
      `
        input {
          border-bottom: ${theme.commonBorderStyle} ${theme.errorColor};
        }
      `
    }
  }}

  input::placeholder{
    font-size: 12px;
  }

  input:focus{
    border-color: #5d756a;
  }
`;

export const Or = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 50%;
  color: #8f8f8f;
  grid-template-columns: 8rem 2rem 8rem;
  margin-top: 1rem;
  margin-bottom: 2.3rem;
  font-size: ${theme.secondaryFontSize};
  font-family: 'Mulish', sans-serif;

  .line {
    border-bottom: solid 1px #c2c2c2;
  }

  span {
      margin: auto;
      font-family: 'Mulish', sans-serif;
  }
`

export const Header = styled.header`
  width: 100%;
  margin-left: 125px;

  h1 {
    text-align: right;
    font: normal normal 900 35px/48px;
    font-family: 'Lato';
    color: #000000;
    opacity: 1;
  }

  @media only screen and (max-width: 720px){
    header {
      display: none;
    }
  }

  @media only screen and (max-width: 600px){
    & {
      display: none;
    }
  }
`
export const GoogleButton = styled.div`
  text-align: left;
  font: normal normal normal 14px/20px 'Lato';
  align-items: center;
  display: flex;
  padding: 0 16px;
  height: 50px;
  width: 200px;
  border-radius: 40px;
  transition: background-color 0.4s;
  box-shadow: 0px 3px 6px #00000029;
  margin-bottom: 25px;
  p {
    margin: auto;
  }

  img{
    height: 30px;
    width: 30px;
  }

  @media only screen and (max-width: 720px){
    font-size: 18px;
    width: 205px;
  }
`
const appearFromRight = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const SlideItemAnimated = styled.div`
  ${props => props.next ? "animation: ${appearFromRight} 1s;" : ""}
`

export const AnimationContainer = styled.div`
  display: flex;
  margin: auto;
  width: 50%;
  min-width: ${theme.minHeight};
  min-height: ${theme.minWidth};
  display: flex;
  flex: ${theme.wraper};
  flex-direction: column;
  align-items: center;

  max-height: ${theme.defaultPercentSize};

  animation: ${appearFromRight} 1s;
`;

export const Loader = styled.div`
  ${props => props.load ? `display:block` :  `display: none`};

  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid ${theme.primaryColor};
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export const Sucess = styled.div`
  margin-top: ${theme.littleMarginSize};
  font-size: ${theme.secondaryFontSize};
  font-family: 'Mulish', sans-serif;
  color: ${theme.primaryColor};
`

export const Failed = styled.div`
  margin-top: ${theme.littleMarginSize};
  font-size: ${theme.secondaryFontSize};
  font-family: 'Mulish', sans-serif;
  color: ${theme.errorColor};
`