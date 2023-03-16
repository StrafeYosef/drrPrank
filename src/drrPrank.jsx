import DRRbg from './assets/homePage.png'
import DRRgate from './assets/Start_Gate.png'
import DRRgate2 from './assets/End_Gate.png'
import { useState } from 'react'

function App() {

  let [square, setSquare] = useState(false);

  let goTo = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ','_blank');
  }

  let mouseOver = () => {
    setSquare(square = true);
  }

  let mouseOut = () => {
    setSquare(square = false);
  }

  return (
    <>
      <div className="mainImage">
        <img src={DRRbg} alt="drrBG" />
        <p onClick={goTo} onMouseOver={mouseOver} onMouseOut={mouseOut} className='gate square'></p>
        {square ? <img className='gate trans second' src={DRRgate2} alt="drrBG" /> : <img className='gate trans' src={DRRgate} alt="drrBG" />}
      </div>
    </>
  )
}

export default App
