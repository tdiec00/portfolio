import "./modal.css"

export default function Modal(props) {
  return (
    <div className={`modal ${props.show ? "show" : ""}`} onClick={() => props.onClose()}>
      <div className="flex fixed inset-0 bg-blackbg/[0.7] items-center justify-center">
        <div className="w-3/5 h-3/5 bg-blackbg/[1] shadow-[0_0_14px_6px] shadow-white" onClick={(e) => e.stopPropagation()}>
          <div className="h-4/5 p-2.5 mt-">
            <h1 className="text-4xl mb-10 text-black ">{props.title}</h1>
            <div className="h-4/5 p-2.5 ">
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
