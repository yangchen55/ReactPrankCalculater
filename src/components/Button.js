import React from "react";

export const Button = ({ cls, label, handleOnButtonClick }) => {
  return (
    // arrow function is required as otherwise it will load at once
    <div className={"btn" + cls} onClick={() => handleOnButtonClick(label)}>
      {label}
    </div>
  );
};
