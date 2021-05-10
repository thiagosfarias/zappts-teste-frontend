import styled, { keyframes, css } from 'styled-components'


//Colors
const primaryColor = "#A9C5BA"
const secondaryColor = "#707070"
const tertiaryColor = '#BDBDBD';
const errorColor = '#E53935';


//Margins
const littleMarginSize = '5px';
const mediumMarginSize = '12px';

//Fonts
const secondaryFontSize = '12px';
const principalFontSize = '14px';
const mobileFontSize = '20px';
const tabletViewPort = '768px';
const largeTabletViewPort = '1024px';


//Padings & Borders
const defaultVerticalPaddingSize = '10px';
const commonBorderStyle = '1px solid';


//Default Button
const buttonMarginTop = "2.7rem"
const buttonMarginBottom = "2.3rem"
const buttonPadding = "0 16px"
const buttonHeight = "45px"
const buttonWidth = "175px"
const buttonBorderRadius = "40px"

//Container 
const minHeight = "600px"
const minWidth = "600px"
const wraper = "1 0 auto"
const defaultPercentSize = '100%';

export const Button = styled.button`
    border: none; 
    margin: auto;
    margin-top: ${buttonMarginTop};
    margin-bottom: ${buttonMarginBottom};
    justify-content: center;
    align-items: center;
    display: flex;
    padding: ${buttonPadding};
    height: ${buttonHeight};
    width: ${buttonWidth};
    border-radius: ${buttonBorderRadius};   
    background-color: ${secondaryColor};
    color: white;
    cursor: pointer;
    
    @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3) {
      font-size: 18px;
    }
`


export const Container = styled.div`
  display: flex;
  width: 50%;
  min-width: ${minHeight};
  min-height: ${minWidth};
  display: flex;
  flex: ${wraper};
  flex-direction: column;
  align-items: center;
  
  form {
    width: 75%;
  }

  a.link{
    margin-top: ${mediumMarginSize};
    font-size: ${secondaryFontSize};
    text-decoration: underline ${primaryColor};
    color: ${primaryColor};
  }

  span{
    font-size: ${secondaryFontSize};
    color: ${secondaryColor}
  }

  a {
    text-decoration: none;
    text-align: end;
    color: ${secondaryColor};
  }

  h1 {
      font-weight: 200;
      color: black;
      margin-bottom: 4.5rem;
  }

  h2 {
    color: ${secondaryColor};
  }

  span.error{
    margin-top: ${mediumMarginSize};
    color: ${errorColor};
  }

    @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3)  {
      font-size: 25px;
      height: 100%;
      header {
        display: none;
      }

      span, a.link{
        font-size: ${mobileFontSize};
        margin-bottom: ${littleMarginSize};
      }
      
      form {
        width: 75%;
        height: 100%;
      }
  }

  @media only screen and (max-width: 720px){
    header {
      display: none;
    }
  }
`;


export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${secondaryFontSize};
  margin-top: 1rem;
  margin-bottom: ${littleMarginSize};
  color: gray;
  input {
    padding: ${defaultVerticalPaddingSize};
    outline: none;
    font-size: ${principalFontSize};
    border: none;
    border-bottom: ${commonBorderStyle} ${tertiaryColor};
    ${props => props.hasError && css`border-bottom: ${commonBorderStyle} ${errorColor};`}
  }

    

  span {
    display: block;
    margin: ${littleMarginSize};
    color: ${errorColor};
  }

  @media only screen and (max-width: 650px) {
    font-size: 22px;
    span {
      font-size: 18px;
    }
    input {
      font-size: 22px;
    }
    input::placeholder{
      font-size: 18px;
    }
  }

  ${props => {
    if(props.hasError){
      `
        input {
          border-bottom: ${commonBorderStyle} ${errorColor};
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
  font-size: ${secondaryFontSize};

  .line {
    border-bottom: solid 1px #c2c2c2;
  }

  span {
      margin: auto;
  }
`

export const Header = styled.header`
  width: 100%;
  margin-left: 125px;
  h1 {
    text-align: right;
    font-size: 2rem;
    font-weight: 700;
  }
`
export const GoogleButton = styled.div`
      font-size: 14px;
      align-items: center;
      display: flex;
      padding: 0 16px;
      height: 50px;
      width: 200px;
      border-radius: 40px;
      transition: background-color 0.4s;
      box-shadow: 0px 3px 6px #00000029;
      margin-bottom: 2.5rem;
      p {
        margin-left: 12px;
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
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`

export const SlideItemAnimated = styled.div`
  ${props => props.next ? "animation: ${appearFromRight} 1s;" : ""}
`

export const AnimationContainer = styled.div`
  display: flex;
  margin: auto;
  width: 50%;
  min-width: ${minHeight};
  min-height: ${minWidth};
  display: flex;
  flex: ${wraper};
  flex-direction: column;
  align-items: center;

  max-height: ${defaultPercentSize};

  animation: ${appearFromRight} 1s;

`;

export const Loader = styled.div`
  ${props => props.load ? `display:block` :  `display: none`};

  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid ${primaryColor};
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
    margin-top: ${littleMarginSize};
    font-size: ${secondaryFontSize};
    color: ${primaryColor};
`

export const Failed = styled.div`
    margin-top: ${littleMarginSize};
    font-size: ${secondaryFontSize};
    color: ${errorColor};
`