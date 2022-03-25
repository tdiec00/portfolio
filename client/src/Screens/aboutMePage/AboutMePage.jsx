import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from "react-icons/ai"
import Resume from "../../images/Resume.pdf"

export default function AboutMePage(props) {
  return (
    <div className="mt-10">
      <div className="flex justify-center w-screen"></div>
      <div id="about" className=" text-white text-lg md:text-xl text-center flex flex-col justify-center h-3/4 ">
        <h1 className="text-2xl md:text-4xl  pb-5 pt-10">About Me</h1>
        <div className=" flex flex-wrap break-normal md:mx-44 pb-10 mb-20">
          <p className="pl-6 pr-6 break-normal ">
            Trung was born and raised in Boston Massachusetts, and has served as a healthcare professional for over a decade at two of the most prestigious hospitals in Massachusetts (Massachusetts
            General Hospital and Boston Medical Center). In November of 2020, Trung made one of the biggest decisions in his life, leaving behind his pharmacy career, and enrolling in General
            Assembly's 12-week Software Engineering Immersive bootcamp. During his time with General Assembly, Trung gained knowledge of various languages and databases, along with the tools and
            understanding to continue growing his knowledge in the software development industry.
          </p>
          <div className="m-auto flex flex-col justify-center items-center">
            <div className="flex flex-row">
              <a className="mr-5 " href="https://www.linkedin.com/in/trungdiec/" target="_blank" rel="noreferrer">
                <AiFillLinkedin className="h-20 w-10 hover:fill-rose-700" />
              </a>
              <a className="mr-5" href="https://github.com/tdiec00" target="_blank">
                <AiFillGithub className="h-20 w-10 hover:fill-rose-700" />
              </a>
              <button onClick={() => props.setShow(true)}>
                <AiOutlineMail className="h-20 w-10 hover:fill-rose-700" />
              </button>
            </div>
            <div>
              <a className="font-medium text-white font-mono text-2xl ... p-5 hover:scale-125 hover:text-rose-700" href={Resume} target="_blank" rel="noreferrer">
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
