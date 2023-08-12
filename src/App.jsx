import { Navbar, Model } from './components'
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
        <Navbar/>      
        <Model/>     
    </BrowserRouter>
   
    </>
  )
}

export default App
