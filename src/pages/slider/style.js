import styled, { keyframes } from 'styled-components';
import theme from '../../theme';

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

    @media only screen and (max-width: 420px)  and (max-width: 700px) and (max-width: 1024px){
        width: 100%
    }

`

export const SlideItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 60vh;
        height: auto;
    }

    p {
        text-align: center;
        margin-left: 2rem;
        margin-right: 2rem;
        max-width: 75%;
        height: 60px;
    }

    @media (max-width: 600px) {
        img {
            margin-top: 2rem;
            width: 45vh
        }
    }

    @media (max-width: 768px) {
        img {
            margin-top: 2rem;
            width: 28vh
        }
    }

    @media (max-width: 1024px) {
        img {
            width: 40vh
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
  min-width: ${theme.minHeight};
  min-height: ${theme.minWidth};
  display: flex;
  flex: ${theme.wraper};
  flex-direction: column;
  align-items: center;

  max-height: ${theme.defaultPercentSize};

  animation: ${appearFromRight} 3s infinite;
`
