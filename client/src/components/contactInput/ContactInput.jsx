import Modal from "../modal/Modal"

export default function ContactInput(props) {
  return (
    <div className="h-3/5">
      <Modal
        onClose={() => {
          props.setShow(false)
        }}
        show={props.show}
        title="Contact me"
      >
        <form>
          <input />
          <input />
        </form>
      </Modal>
    </div>
  )
}
