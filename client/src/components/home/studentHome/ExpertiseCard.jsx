import React from "react";

function ExpertiseCard({ value, handleClick }) {
  return (
    <div
      className=" border-none w-48 border h-36 rounded-md bg-gray-700 hover:bg-gray-800 active:bg-gray-900 flex items-center justify-center"
      onClick={() => handleClick(value)}
    >
      <p className=" text-2xl">{value}</p>
    </div>
  );
}

export default ExpertiseCard;
