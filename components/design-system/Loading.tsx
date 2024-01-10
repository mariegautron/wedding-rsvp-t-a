import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-current">
      <div className="animate-spin rounded-full border-t-4 border-primary border-opacity-20 h-14 w-14"></div>
    </div>
  );
};

export default Loading;
