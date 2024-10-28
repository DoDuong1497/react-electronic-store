import React from "react";

interface IButtonProps {
  className: string;
  textBtn: string;
  onClick: any;
}

const Button = ({ className, textBtn = "Default", onClick }: IButtonProps) => {
  return (
    <button type='button' className={className} onClick={onClick}>
      {textBtn}
    </button>
  );
};

export default Button;
