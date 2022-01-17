import React from "react";

interface ModalProps {
  open: boolean;
  handleClose: any;
  handleAccept: any;
}

function Modal({ open, handleClose, handleAccept }: ModalProps) {
  return open ? (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-dark-blue opacity-50 z-10"
        onClick={handleClose}
      />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="bg-white w-96 p-8 rounded-lg space-y-4">
          <p className="text-dark-blue font-medium text-lg">Delete comment</p>
          <p className="text-grayish-blue">
            Are you sure you want to delete this comment ? <br />
            This action c'ant be undon
          </p>

          <div className="grid grid-cols-2 gap-4">
            <button
              className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-grayish-blue hover:opacity-80 transition-all"
              onClick={handleClose}
            >
              NO, CANCEL
            </button>
            <button
              className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-soft-red hover:opacity-80 transition-all"
              onClick={handleAccept}
            >
              YES, DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Modal;
