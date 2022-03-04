import {useState} from "react"
import {Route, Routes} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import LandingPage from "./Screens/landingPage/LandingPage"

function App() {
  const [toggleModal, setToggleModal] = useState(false)
  return (
    <div className="text-center bg-iTerm w-screen z-0 ">
      <Navbar setToggleModal={setToggleModal} />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage setToggleModal={setToggleModal} toggleModal={toggleModal} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
