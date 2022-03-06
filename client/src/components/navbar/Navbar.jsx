import Resume from "../../images/Resume.pdf"

const Navbar = (props) => {
  return (
    <div className="z-10 h-14 flex justify-center items-center bg-blackbg fixed top-0 opacity-80 w-full">
      <a href="#home" className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-stone-400">
        ~ CD Home
      </a>
      <a href="#project" className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-stone-400">
        ~ CD Projects
      </a>
      <a href="#skills" className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-stone-400">
        ~ CD Skills
      </a>
      <a href="#about" className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-stone-400">
        ~ CD About-Me
      </a>
      <button onClick={() => props.setShow(true)} className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-stone-400">
        ~ CD Contact
      </button>
      <a className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-stone-400" href={Resume} target="_blank" rel="noreferrer">
        ~ CD Resume
      </a>
    </div>
  )
}

export default Navbar
