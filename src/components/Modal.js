function Modal({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-[2px]">
      <div className="bg-white rounded-md shadow-2xl px-6 py-8">
        <p>{message}</p>
        <div className="mt-6 flex justify-end">
          <button
            className="border border-primaryBackground text-primaryBackground rounded-md px-4 py-2 mr-2 "
            onClick={onConfirm}
          >
            Ja
          </button>
          <button
            className="bg-primaryBackground text-white rounded-md px-4 py-2"
            onClick={onCancel}
          >
            Fortryd
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
