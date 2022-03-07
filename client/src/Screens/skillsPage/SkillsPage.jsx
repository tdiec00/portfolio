import Resume from "../../images/Resume.pdf"

export default function SkillsPage() {
  return (
    <div id="skills" className=" text-white text-xl text-center flex flex-col justify-center mb-5 mt-5 h-screen">
      <h1 className="text-2xl  md:text-4xl mb-5">Skills</h1>
      <div className="text-lg flex flex-wrap break-normal pl-6 pr-6 md:mx-44 md:text-xl text-center justify-center">
        <p>
          JavaScript \\ React \\ Ruby \\ Rails \\ MongoDB \\ Mongoose \\ Express \\ PostgreSQL \\ SQL \\ HTML \\ CSS \\ Tailwind \\ BoostStrap \\ React Styled Components \\ Github \\ Heroku \\ Netlify
          \\ Node
        </p>
        <br />
        <div className="flex justify-center w-screen">
          <a className="font-medium text-white font-mono text-2xl ... p-5 hover:scale-125 hover:text-rose-700 " href={Resume} target="_blank" rel="noreferrer">
            Click here to view my Resume
          </a>
        </div>
      </div>
    </div>
  )
}
