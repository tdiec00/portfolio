const Navbar = (props) => {
  return (
    <div className="z-10 h-24 flex justify-center items-center bg-blackbg fixed top-0 opacity-80 w-full">
      <a href="#project" className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-rose-700 md:text-2xl">
        ~ CD Projects
      </a>
      <a href="#skills" className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-rose-700 md:text-2xl">
        ~ CD Skills
      </a>
      <a href="#about" className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-rose-700 md:text-2xl">
        ~ CD About-Me
      </a>
      <button onClick={() => props.setShow(true)} className="font-medium text-white font-mono text-xl ... p-5 hover:scale-125 hover:text-rose-700 md:text-2xl">
        ~ CD Contact Me
      </button>
    </div>
  )
}

export default Navbar
