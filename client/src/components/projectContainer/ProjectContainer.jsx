import Modal from "../modal/Modal"
import {useState} from "react"

export default function ProjectContainer(props) {
  const [show, setShow] = useState(false)

  return (
    <div className="h-80 bg-blackbg w-80 m-5 pt-3 ">
      <a href={props.link}>
        <div>
          <p className="pb-2" onClick={() => setShow(true)}>
            {props.title}
          </p>
          <Modal
            onClose={() => {
              props.setShow(false)
            }}
            show={show}
          >
            <p>{props.children}</p>
          </Modal>
        </div>
      </a>
    </div>
  )
}
