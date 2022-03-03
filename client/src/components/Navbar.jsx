import {Link} from "react-router-dom"
import Resume from "../images/Resume.pdf"

const Navbar = () => {
  return (
    <div className="h-14 flex justify-center items-center">
      <Link to="/" className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-stone-400">
        ~ CD Home
      </Link>
      <Link to="/" className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-stone-400">
        ~ CD Projects
      </Link>
      <Link to="/" className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-stone-400">
        ~ CD Skills
      </Link>
      <Link to="/" className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-stone-400">
        ~ CD About-Me
      </Link>
      <Link to="/" className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-stone-400">
        ~ CD Contact
      </Link>
      <a className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-stone-400" href={Resume} target="_blank" rel="noreferrer">
        ~ CD Resume
      </a>
    </div>
  )
}

export default Navbar
