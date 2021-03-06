import ProjectContainer from "../../components/projectContainer/ProjectContainer"
import CouchWorking from "../../components/projects/CouchWorking"
import WhatsThePrice from "../../components/projects/WhatsThePrice"
import BrewMaster from "../../components/projects/BrewMaster"
import AthleticPerformanceIndex from "../../components/projects/AthleticPerformanceIndex"
import couch from "../../images/couch.png"
import supermarket from "../../images/supermarket.jpeg"
import exercises from "../../images/exercises.png"
import keg from "../../images/keg.png"

export default function ProjectPage() {
  return (
    <div id="project" className=" text-white  text-2xl h-300 lg:h-250 flex items-center flex-col mt-32">
      <h1 className="text-2xl md:text-4xl pb-10">Projects</h1>
      <div className="flex flex-wrap max-w-sm lg:max-w-5xl justify-between">
        <ProjectContainer title="What's the Price" link="https://trungs-supermarket.netlify.app/" image={supermarket} alt="black and white supermarket">
          <WhatsThePrice />
        </ProjectContainer>
        <ProjectContainer title="Couch Working" link="https://couchworking.netlify.app/" image={couch} alt="black and white couch">
          <CouchWorking />
        </ProjectContainer>
        <ProjectContainer title="Athlethic Performance Index" link="https://athletic-performance-index.netlify.app/" image={exercises} alt="black and white dumbbell">
          <AthleticPerformanceIndex />
        </ProjectContainer>
        <ProjectContainer title="Brew Master" link="https://tdiec00.github.io/Brew-Master-Index/" image={keg} alt="black and white beer keg">
          <BrewMaster />
        </ProjectContainer>
      </div>
    </div>
  )
}
