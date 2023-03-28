import DRRbg from './assets/homePage.png'
import DRRgate from './assets/Start_Gate.png'
import DRRgate2 from './assets/End_Gate.png'
import { useEffect, useState } from 'react'
import rickRoll from './assets/rickRoll.gif'

function App() {

  let [square, setSquare] = useState(false);
  let [show, setShow] = useState(false);

  // let strings = ['this is the first', 'this is second', 'this is third'];
  // let [string, setString] = useState('this is the first');

  let mouseOver = () => {
    setSquare(square = true);
  }

  let mouseOut = () => {
    setSquare(square = false);
  }

  let activateIt = () => {
    setTimeout(() => {
      setShow(true);
    }, 750);
  }

  // let i = 0;

  // function eachOne() {
  //   if (i <= strings.length) {
  //     i++;
  //     console.log(strings[i - 1])
  //   }
  //   if (i == strings.length) {
  //     i = 0;
  //   }
  //  setTimeout(eachOne, 3000);
  //  setString(strings[i])
  // }

  // useEffect(() => {
  //   eachOne();
  // }, [])


  // let goEach = () => {
  // }

  return (
    <>
      <div className="mainImage">
        <img src={DRRbg} alt="drrBG" />
        <p onClick={activateIt} onMouseOver={mouseOver} onMouseOut={mouseOut} className='gate square'></p>
        {/* <p className='text'>{string}</p> */}
        {show && <div className="dialogConatiner">
            <img src={rickRoll} alt="rickRoll" />
            <p>We are still working on the Alpha version.<br/>Help us be supporting on patreon:<br/> <a href="https://www.patreon.com/DungeonRampageRemakeDRR" target="_blank">https://www.patreon.com/DungeonRampageRemakeDRR</a><br/>April Fools by DRR team.</p>
        </div> }
        {square ? <img className='gate trans second' src={DRRgate2} alt="drrBG" /> : <img className='gate trans' src={DRRgate} alt="drrBG" />}
      </div>
    </>
  )
}

export default App
