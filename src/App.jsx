import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './global.js'
import { GlobalStyle, PageWrap } from './global.js'
import Slider from './pages/slider'
import Routes from './routes'

const App = ()=> {
    return (
        <>
            <GlobalStyle />
            <PageWrap>
                <Router>
                    <Slider />
                    <Routes />
                </Router>            
            </PageWrap>
        </>
    )
}

export default App