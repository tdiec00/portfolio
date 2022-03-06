import ProjectContainer from "../../components/projectContainer/ProjectContainer"
import AthleticPerformanceIndex from "../../components/projects/AthleticPerformanceIndex"
import CouchWorking from "../../components/projects/CouchWorking"
import WhatsThePrice from "../../components/projects/whatsThePrice"
import BrewMaster from "../../components/projects/BrewMaster"

export default function ProjectPage() {
  return (
    <div id="project" className=" text-white  text-center w-screen flex flex-col justify-center text-2xl">
      <h1 className="text-4xl mb-10">Projects</h1>
      <div className="flex flex-row flex-wrap justify-evenly">
        <ProjectContainer title="What's the Price" link="https://trungs-supermarket.netlify.app/"></ProjectContainer>
        <ProjectContainer title="Couch Working" link="https://couchworking.netlify.app/"></ProjectContainer>
        <ProjectContainer title="Athlethic Performance Index" link="https://athletic-performance-index.netlify.app/"></ProjectContainer>
        <ProjectContainer title="Brew Master" link="https://tdiec00.github.io/Brew-Master-Index/"></ProjectContainer>
      </div>
    </div>
  )
}
