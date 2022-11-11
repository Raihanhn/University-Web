import './App.css'
import About from './components/About/About'
import Apply from './components/Apply/Apply'
import Banner from './components/Banner/Banner'
import ContentOne from './components/ContentOne/ContentOne'
import ContentTwo from './components/ContentTwo/ContentTwo'
import Navbar from './components/Navbar/Navbar'
import Navbars from './components/Navbars/Navbars'

function App() {

  return (
    <div className="App">
     <Navbar/>
     <Navbars/>
     <Banner/>
     <About/>
     <ContentOne/>
     <ContentTwo/>
     <Apply/>
    </div>
  )
}

export default App
