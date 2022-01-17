import { useState } from "react";
import { IComment } from "../types";
import { DeleteIcon, EditIcon } from "./icons";
import Modal from "./Modal";
import ScoreInput from "./ScoreInput";

interface CommentBodyProps {
  content: IComment;
}

function UserComment({ content }: CommentBodyProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditibal, setIsEditibal] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleAccept = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleEdit = () => {
    setIsEditibal(true);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-md grid grid-cols-12 gap-3">
        <ScoreInput value={content.score} />
        <div className="col-span-11 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                className="w-8 h-8"
                src={content.user.image.webp}
                alt="amyrobson"
              />
              <p className="font-medium text-dark-blue">
                {content.user.username}
              </p>
              <p className="text-sm font-medium text-white bg-moderate-blue px-2 rounded-sm">
                you
              </p>
              <p className="text-grayish-blue">{content.createdAt}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div
                className="flex items-center font-bold text-soft-red space-x-1 cursor-pointer hover:opacity-80 transition-all"
                onClick={openModal}
              >
                <DeleteIcon />
                <p>Delete</p>
              </div>
              {isEditibal ? (
                <p
                  className="text-grayish-blue font-bold cursor-pointer hover:opacity-80 transition-all"
                  onClick={() => setIsEditibal(false)}
                >
                  <span className="text-lg mr-1">&times;</span>
                  Cancel
                </p>
              ) : (
                <div
                  className="flex items-center font-bold text-moderate-blue space-x-1 cursor-pointer hover:opacity-80 transition-all"
                  onClick={handleEdit}
                >
                  <EditIcon />
                  <p>Edit</p>
                </div>
              )}
            </div>
          </div>

          <div>
            {!isEditibal ? (
              <p className="text-grayish-blue">{content.content}</p>
            ) : (
              <>
                <textarea
                  className="p-4 border-2 w-full border-light-gray focus:border-moderate-blue transition-all rounded-md col-span-9"
                  defaultValue={content.content}
                  rows={3}
                ></textarea>
                <button className="ml-auto bg-moderate-blue text-white font-medium rounded-md py-3 px-4 hover:opacity-80 transition-all float-right">
                  UPDATE
                </button>
              </>
            )}
          </div>
        </div>
        <Modal
          open={isModalOpen}
          handleAccept={handleAccept}
          handleClose={handleClose}
        />
      </div>
    </>
  );
}

export default UserComment;
