import {Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import LandingPage from "./Screens/landingPage/LandingPage"

function App() {
  return (
    <div className="text-center bg-iTerm w-screen z-0 ">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
