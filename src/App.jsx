import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Navbars from './components/Navbars/Navbars'

function App() {

  return (
    <div className="App">
     <Navbar/>
     <Navbars/>
     <Banner/>
     <About/>
    </div>
  )
}

export default App
