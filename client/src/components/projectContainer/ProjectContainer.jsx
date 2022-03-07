import Modal from "../modal/Modal"
import {useState} from "react"

export default function ProjectContainer(props) {
  const [show, setShow] = useState(false)

  return (
    <div className="h-72 bg-blackbg w-80 m-5 pt-3 ">
      <div>
        <p className="text-lg pb-2 cursor-pointer hover:text-rose-700 md:text-2xl" onClick={() => setShow(true)}>
          {props.title}
        </p>
        <div className="flex justify-center mt-6">
          <img className="w-9/12 h-44" src={props.image} alt={props.alt}></img>
        </div>
        <Modal
          onClose={() => {
            setShow(false)
          }}
          show={show}
          link={props.link}
          title={props.title}
        >
          <div>{props.children}</div>
        </Modal>
      </div>
    </div>
  )
}
