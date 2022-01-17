import React, { useState } from "react";
import { useCurrentUser } from "../AppContext";
import { IComment } from "../types";
import { ReplyIcon } from "./icons";
import ReplyForm from "./ReplyForm";
import ScoreInput from "./ScoreInput";
import UserComment from "./UserComment";

interface CommentBodyProps {
  content: IComment;
}

function CommentBody({ content }: CommentBodyProps) {
  const [isReplyFormShown, setIsReplyFormShown] = useState(false);
  const currentUser = useCurrentUser();
  // console.log(currentUser);

  const isUserComment = currentUser?.username === content.user.username;

  const reply = () => {
    setIsReplyFormShown((s) => (s ? false : true));
  };

  if (isUserComment) {
    return <UserComment content={content} />;
  }

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
              <p className="text-grayish-blue">{content.createdAt}</p>
            </div>

            <div
              className="flex items-center font-bold space-x-1 cursor-pointer hover:opacity-80 transition-all"
              onClick={reply}
            >
              {isReplyFormShown ? (
                <p className="text-grayish-blue">
                  <span className="text-lg mr-1">&times;</span>
                  Cancel
                </p>
              ) : (
                <>
                  <ReplyIcon />
                  <p className="text-moderate-blue">Reply</p>
                </>
              )}
            </div>
          </div>

          <div>
            <p className="text-grayish-blue">{content.content}</p>
          </div>
        </div>
      </div>
      {isReplyFormShown && <ReplyForm />}
    </>
  );
}

export default CommentBody;
