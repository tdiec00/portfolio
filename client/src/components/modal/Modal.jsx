import "./modal.css"

export default function ContactPage(props) {
  return (
    <div className={`modal ${props.show ? "show" : ""}`} onClick={() => props.onClose()}>
      <div className="flex fixed inset-0 bg-blackbg/[0.7] items-center justify-center" onClick={() => props.setToggleModal((prevToggle) => !prevToggle)}>
        <div className="w-3/5 h-3/5 bg-stone-400/[1]" onClick={(e) => e.stopPropagation()}>
          <div className="h-4/5 p-2.5 mt-">
            <h1 className="text-4xl mb-10 text-black ">{props.title}</h1>
            <div className="h-4/5 p-2.5 border-y border-white">
              {props.children}
              <div className="modal-footer"></div>
              <button
                onClick={() => {
                  props.onClose()
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
