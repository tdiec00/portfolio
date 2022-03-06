import Modal from "../modal/Modal"

export default function ContactInput(props) {
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
        <form className="flex flex-col w-4/5 justify-center items-center text-left">
          <label className="text-white w-10/12">Name:</label>
          <input className="w-10/12" placeholder="Your name" />
          <br />
          <label className="text-white w-10/12">Email:</label>
          <input className="w-10/12" placeholder="Your email" />
          <br />
          <label className="text-white w-10/12">Message:</label>
          <textarea rows="4" className="w-10/12 " placeholder="Your message"></textarea>
          <button className="text-white mt-5 pb-3 hover:text-rose-700">Submit</button>
        </form>
      </Modal>
    </div>
  )
}
