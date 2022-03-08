import {useState} from "react"
import {send} from "emailjs-com"
import Modal from "../modal/Modal"

export default function ContactInput(props) {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Trung",
    message: "",
    reply_to: "",
  })

  const onSubmit = (e) => {
    e.preventDefault()
    send("service_x7cir3o", "template_qsenhaj", toSend, "77_JlzbS5iTX_BvN9")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text)
      })
      .catch((err) => {
        console.log("FAILED...", err)
      })
    setToSend({
      from_name: "",
      to_name: "Trung",
      message: "",
      reply_to: "",
    })
  }

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value})
  }

  return (
    <div className="h-3/5">
      <Modal
        onClose={() => {
          props.setShow(false)
        }}
        show={props.show}
        setShow={props.setShow}
        title="Contact Me"
      >
        <form className="flex flex-col w-4/5 justify-center items-center text-left" onSubmit={(e) => onSubmit(e)}>
          <label className="text-white w-10/12">Name:</label>
          <input className="w-10/12" type="text" name="from_name" placeholder="from name" value={toSend.from_name} onChange={(e) => handleChange(e)} required />
          <br />
          <label className="text-white w-10/12">Email:</label>
          <input className="w-10/12" type="text" name="reply_to" placeholder="Your email" value={toSend.reply_to} onChange={(e) => handleChange(e)} required />
          <br />
          <label className="text-white w-10/12">Message:</label>
          <textarea rows="4" className="w-10/12 " type="text" name="message" placeholder="Your message" value={toSend.message} onChange={(e) => handleChange(e)} required></textarea>
          <button className="text-white mt-5 pb-3 hover:text-rose-700" type="submit">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  )
}
