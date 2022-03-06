import React from "react"

export default function ProjectContainer(props) {
  return (
    <div className="h-80 bg-blackbg w-80 m-5 pt-3 ">
      <a href={props.link}>
        <div>
          <p className="pb-2">{props.title}</p>
          <p>{props.children}</p>
        </div>
      </a>
    </div>
  )
}
