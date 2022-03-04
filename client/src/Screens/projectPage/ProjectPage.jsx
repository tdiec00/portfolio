import React from "react"

export default function ProjectPage() {
  return (
    <div id="project" className=" text-white  text-center w-screen flex flex-col justify-center text-2xl">
      <h1 className="text-4xl mb-10">Projects</h1>
      <div className="flex flex-row flex-wrap justify-evenly">
        <div className="h-80 bg-blackbg w-80 m-5 pt-5">
          <a href="https://trungs-supermarket.netlify.app/">Whats the Price</a>
          <p>Description</p>
        </div>
        <div className="h-80 bg-blackbg w-80 m-5 pt-5">
          <a href="">Whats the Price</a>
          <p>Description</p>
        </div>
        <div className="h-80 bg-blackbg w-80 m-5 pt-5">
          <a href="">Whats the Price</a>
          <p>Description</p>
        </div>
        <div className="h-80 bg-blackbg w-80 m-5 pt-5">
          <a href="">Whats the Price</a>
          <p>Description</p>
        </div>
      </div>
    </div>
  )
}
