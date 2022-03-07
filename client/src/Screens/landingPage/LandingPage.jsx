import ProjectPage from "../projectPage/ProjectPage"
import SkillsPage from "../skillsPage/SkillsPage"
import AboutMePage from "../aboutMePage/AboutMePage"
import Modal from "../../components/contactInput/ContactInput"
import "animate.css"
import "./landingPage.css"

export default function LandingPage(props) {
  return (
    <div id="home" className="text-center  ">
      <div className="flex flex-row w-screen ">
        <div className="m-5 h-72 text-left">
          <h1 className="font-medium text-white font-mono  ... text-4xl   opacity-100 ml-2 pt-20">~Welcome to iTrung</h1>
          <h1 className="text-white text-2xl mt-5 ml-2">~cd portolio</h1>
          <h1 className="text-white text-2xl mt-2 ml-2">~npx create-react-app trung-portfolio</h1>
          <div className="flex ... content-center items-center">
            <h1 className="text-white text-2xl mt-2 ml-2">~Trung's Portfolio</h1>
            <div className="bg-white w-1.5 h-6 ml-1.5 animate__animated animate__flash  animate__infinite	infinite mt-2"></div>
          </div>
        </div>
      </div>
      <ProjectPage />
      <SkillsPage />
      <AboutMePage />
      <Modal
        onClose={() => {
          props.setShow(false)
        }}
        show={props.show}
        setShow={props.setShow}
        title="Contact Me"
      ></Modal>
    </div>
  )
}
