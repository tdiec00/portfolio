import "./modal.css"

export default function Modal(props) {
  return (
    <div className={`modal ${props.show ? "show" : ""}`} onClick={() => props.onClose()}>
      <div className="flex fixed inset-0 bg-blackbg/[0.7] items-center justify-center ">
        <div className="w-screen md:w-105 h-105 bg-blackbg/[1] shadow-[0_0_14px_4px] shadow-white flex justify-center flex-col items-center " onClick={(e) => e.stopPropagation()}>
          <div className="w-4/5 p-2.5 flex items-center flex-col h-full">
            <h1 className=" text-xl md:text-4xl mb-7 text-white ">{props.title}</h1>
            <div className="h-4/5 p-2.5  w-full flex flex-col items-center">
              {props.children}
              <div className="modal-footer"></div>
            </div>
            <button
              className="text-base md:text-xl mt-6 bottom-0 pb-3 text-white cursor-pointer hover:text-rose-700"
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
  )
}
