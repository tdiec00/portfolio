import Modal from "../modal/Modal"
import {useState} from "react"

export default function ProjectContainer(props) {
  const [show, setShow] = useState(false)

  return (
    <div className="h-80 bg-blackbg w-80 m-5 pt-3 ">
      <div>
        <p className="pb-2 cursor-pointer" onClick={() => setShow(true)}>
          {props.title}
        </p>
        <Modal
          onClose={() => {
            setShow(false)
          }}
          show={show}
          link={props.link}
        >
          <div>{props.children}</div>
        </Modal>
      </div>
    </div>
  )
}
