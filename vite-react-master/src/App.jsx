import { useState } from 'react'
import './App.css'
import Button from './components/ul/Button.jsx'
import MyNavigationMenu from './components/ul/MyNavigationMenu.jsx'
import MyText from './components/ul/Text.jsx'
import Img from './components/ul/Img.jsx'
import Flex from './components/ul/Flex.jsx'
import Footer from './components/ul/Footer.jsx'


function App() {
  return (
    <div>
      <MyNavigationMenu>П-43</MyNavigationMenu>
      <MyText>Меня зовут Анастасия</MyText>
      <Img>https://sun9-88.userapi.com/s/v1/ig2/f160pd0zUWdrTZt4e39He2DgcvGtcwi2KW2YF9bgn8s5W3RPMVrRYXxGRoTr7dreGdooicvC4n5bns8GsObNJYp0.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960&from=bu&cs=720x0</Img>
      <Button>Кнопка</Button>
      <Flex />
      <Footer>А это подвал</Footer>
    </div>
  )
}

export default App