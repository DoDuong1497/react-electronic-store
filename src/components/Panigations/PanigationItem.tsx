import React from "react";
import Button from "../button/Button";

interface IPanigationItemProps {
  className: string;
  textBtn: string;
  onClick: any;
}

const PanigationItem = ({
  className,
  textBtn,
  onClick,
}: IPanigationItemProps) => {
  return (
    <li>
      {/* <button
        type='button'
        className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700'
      >
        Previous
      </button> */}
      <Button
        className={className}
        textBtn={textBtn}
        onClick={() => onClick(textBtn)}
      />
    </li>
  );
};

export default PanigationItem;
