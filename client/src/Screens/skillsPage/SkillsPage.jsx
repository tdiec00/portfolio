export default function SkillsPage() {
  return (
    <div id="skills" className=" text-white text-xl text-center flex flex-col justify-center mb-5 h-200 m-auto">
      <h1 className="text-2xl  md:text-4xl mt-10">Core Skills</h1>

      <div className="text-lg flex flex-wrap break-normal pl-6 pr-6 md:text-xl text-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 p-14">
          <div>
            <img className="mx-auto my-4 h-14 w-56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript"></img>
            <p>JavaScript</p>
          </div>
          <div>
            <img class="mx-auto my-4 h-14 w-56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css3"></img>
            <p>CSS</p>
          </div>
          <div>
            <img class="mx-auto my-4 h-14 w-56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwindcss"></img>
            <p>TailwindCSS</p>
          </div>
          <div>
            <img class="mx-auto my-4 h-14 w-56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="mongoDB"></img>
            <p>MongoDB</p>
          </div>
          <div>
            <img class="mx-auto my-4 h-14 w-56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html5"></img>
            <p>HTML5</p>
          </div>
          <div>
            <img
              class="mx-auto my-4 h-14 w-14"
              src="data:image/png;base64,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"
              alt="gitHub"
            ></img>
            <p>GitHub</p>
          </div>
          <div>
            <img class="mx-auto my-4 h-14 w-56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react"></img>
            <p>React</p>
          </div>
          <div>
            <img class="mx-auto my-4 h-14 w-56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" alt="postgresql"></img>
            <p>PostgreSQL</p>
          </div>
          <div>
            <img class="mx-auto my-4 h-14 w-56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="bootstrap"></img>
            <p>BootStrap</p>
          </div>
          <div>
            <img class="mx-auto my-4 h-14 w-56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg" alt="ruby"></img>
            <p>Ruby</p>
          </div>
          <div>
            <img class="mx-auto my-4 h-14 w-56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" alt="rails" />
            <p>Rails</p>
          </div>
          <div>
            <img class="mx-auto my-4 h-14 w-56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" alt="heroku"></img>
            <p>Heroku</p>
          </div>
          <div>
            <img class="mx-auto my-4 h-14 w-14 bg-white" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="express" />
            <p>Express</p>
          </div>

          <div>
            <img className="mx-auto my-4 h-14 w-56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" />
            <p>NodeJS</p>
          </div>
        </div>
        <br />

        <br />
      </div>
    </div>
  )
}
