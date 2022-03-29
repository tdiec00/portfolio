import {useState} from "react"
import {Route, Routes} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import LandingPage from "./Screens/landingPage/LandingPage"

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="text-center bg-iTerm w-screen z-0 h-500">
      <Navbar setShow={setShow} />
      <div className="h-500">
        <Routes>
          <Route path="/" element={<LandingPage setShow={setShow} show={show} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
