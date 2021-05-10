import React, { useEffect, useState } from 'react'
import './style.js'
import { Aside, NavigationBar, SlideItem, Nav } from './style.js'
import home_background from '../../assets/home_background.png'

const Slider = () => {
  const [activeBtn, setActiveBtn] = useState([true, false, false]);
  const [text] = useState([
    {
      title:"Paulo Coelho",
      legend:"Imagine uma nova história para sua vida e acredite nela."
    }, 
    {
      title:"Joseph Adison",
      legend:"A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor."
    }, 
    {
      title:"À Procura da Felicidade",
      legend:`Nunca deixe ninguém te dizer que não pode fazer alguma coisa. Se você tem um sonho tem que correr atrás dele. 
        As pessoas não conseguem vencer e dizem que você também não vai vencer. Se você quer uma coisa corre atrás.`
    }
  ])

  const [index, setIndex] = useState(0)
  let timeOut = 0;

  useEffect(() => {
    timeOut = setTimeout(() => {
      index === 2 ? activeButton(0) : activeButton(index + 1)
    }, 4000);
  }, [index])

  const activeButton = (index) => {
    const temp = [false, false, false, false]
    temp[index] = true

    setActiveBtn(temp)
    setIndex(index)
    clearTimeout(timeOut)
  }

  return (
    <Aside>
      <div className="slide-container">
        <SlideItem>
          <img src={home_background} alt="Illustration with some people" />
          <h2>{text[index].title}</h2>
          <p>{text[index].legend}</p>
        </SlideItem>

        <NavigationBar>
          <Nav active={activeBtn[0]} onClick={() => activeButton(0)}></Nav>
          <Nav active={activeBtn[1]} onClick={() => activeButton(1)}></Nav>
          <Nav active={activeBtn[2]} onClick={() => activeButton(2)}></Nav>
        </NavigationBar>
      </div>
    </Aside>
  )
}

export default Slider


