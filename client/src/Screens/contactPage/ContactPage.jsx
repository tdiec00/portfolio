import ContactInput from "../../components/contactInput/ContactInput"

export default function ContactPage(props) {
  return (
    <div>
      {props.toggleModal ? (
        <div className="flex fixed inset-0 bg-blackbg/[0.5] items-center justify-center" onClick={() => props.setToggleModal((prevToggle) => !prevToggle)}>
          <div className="w-3/5 h-3/5 bg-white/[0.9]" onClick={(e) => e.stopPropagation()}>
            <div className="h-4/5 p-2.5 mt-">
              <h1 className="text-4xl mb-10 text-black ">Contact Me</h1>
              <div className="h-4/5 p-2.5 border-y border-white">
                <ContactInput />
                <div className="modal-footer"></div>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
