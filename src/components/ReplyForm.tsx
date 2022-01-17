import React from "react";

function ReplyForm() {
  return (
    <div className="bg-white p-6 rounded-md grid grid-cols-12 gap-3">
      <img
        className="w-10 h-10"
        src="images/avatars/image-juliusomo.png"
        alt="juliusomo"
      />
      <textarea
        className="p-4 border-2 w-full border-light-gray focus:border-moderate-blue transition-all rounded-md col-span-9"
        placeholder="Add a reply..."
        rows={3}
      ></textarea>
      <div className="col-span-2">
        <button className="w-full bg-moderate-blue text-white font-medium rounded-md p-3 hover:opacity-80 transition-all">
          REPLY
        </button>
      </div>
    </div>
  );
}

export default ReplyForm;
