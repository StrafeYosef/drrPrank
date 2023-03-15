import DRRbg from './assets/homePage.png'
import DRRgate from './assets/Start_Gate.png'

function App() {

  let goTo = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ','_blank');
    // window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }

  return (
    <>
      <div className="mainImage">
        <img src={DRRbg} alt="drrBG" />
        <img onClick={goTo} className='gate trans' src={DRRgate} alt="drrBG" />
      </div>
    </>
  )
}

export default App
