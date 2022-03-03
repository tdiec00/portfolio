import "animate.css"
import "./landingPage.css"

export default function LandingPage() {
  return (
    <div className="text-center bg-iTerm ">
      <div className=" relative w-screen m-auto mt-1 h-screen text-left">
        <h1 className="font-medium text-white font-mono  ... text-4xl   opacity-100 pt-3">~Welcome to iTrung</h1>
        <h1 className="text-white text-2xl ">~cd portolio</h1>
        <h1 className="text-white text-2xl">~npx create-react-app trung-portfolio</h1>
        <div className="flex ... content-center items-center">
          <h1 className="text-white text-2xl ">~Trung's Portfolio</h1>
          <div className="bg-white w-1.5 h-6 ml-1.5 animate__animated animate__flash  animate__infinite	infinite"></div>
        </div>
      </div>
    </div>
  )
}
