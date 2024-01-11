import React, { FC } from "react";

const Loading: FC<{ small?: boolean; white?: boolean }> = ({
  small = false,
  white = false,
}) => {
  return (
    <div
      className={`flex justify-center items-center ${
        small ? "h-1/2 bg-transparent" : "h-screen bg-current"
      }`}
    >
      <div
        className={`animate-spin rounded-full  border-opacity-20 ${
          small ? "h-4 w-4 border-t-2" : "h-14 w-14 border-t-4"
        } ${white ? "border-white" : "border-primary"}`}
      ></div>
    </div>
  );
};

export default Loading;
