import Modal from "../modal/Modal"
import {useState} from "react"

export default function ProjectContainer(props) {
  const [show, setShow] = useState(false)

  return (
    <div>
      <div className="bg-blackbg w-100 h-100 m-5 pt-3 cursor-pointer hover:scale-110" onClick={() => setShow(true)}>
        <div>
          <p className="pb-2 cursor-pointer hover:text-rose-700 text-2xl">{props.title} </p>
          <div className="flex justify-center mt-6">
            <img className="w-9/12 h-44" src={props.image} alt={props.alt}></img>
          </div>
        </div>
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
  )
}
