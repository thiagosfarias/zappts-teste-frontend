import styled, { keyframes, css } from 'styled-components';

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



//Container 
const minHeight = "600px"
const minWidth = "600px"
const wraper = "1 0 auto"
const defaultPercentSize = '100%';

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    color: white;
    width: 50%;
    min-width: 600px;
    flex: 1 0 auto;

    align-items: center;
    justify-content: center;

    background-color: #A9C5BA;
    font-weight: '300';

    @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3)  {
        height: 35%;
        h1 {
            display: block;
            align-items: center;
            margin: 0;
            margin-top: 1rem;
            font-size: 40px;
        }
    }


`

export const SlideItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 720px;
        max-width: 800px;
    }

    p{
        text-align: justify;
        text-justify: inter-word;
        margin-left: 2rem;
        margin-right: 2rem;
        max-width: 50%;
    }

    @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3)  {
        img {
            display: block;
            margin-top:1rem;
            width: 50%;
            height:50%;
        }
        
    }
`

export const Nav = styled.button`
        border: none;
        color: rgba(255,255,255,0.0);
        background-color: rgba(255,255,255,0.5);
        border-radius: 50%;
        height: 10px;
        margin-left: .3rem;
        margin-right: .3rem;
        cursor: pointer;

        ${props => props.active ? `
            border-radius: 5px;
            width: 2.2rem;
            background-color: white;
    ` : ""}
`

export const NavigationBar = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;

    @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3)  {
        button {
            display: none;
        }
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

  animation: ${appearFromRight} 3s infinite;
`
