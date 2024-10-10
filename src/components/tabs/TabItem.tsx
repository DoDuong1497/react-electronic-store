import React from "react";

// not active:  border-transparent  hover:text-gray-600 hover:border-gray-300
// active:   text-blue-600  border-blue-600  active

interface ITabItemProps {
  text: string;
  handleGetTextTab: any;
  categoryItem: string;
}

const TabItem = ({ text, handleGetTextTab, categoryItem }: ITabItemProps) => {
  return (
    <li className='me-2'>
      <button
        type='button'
        className={`inline-block p-4 border-b-2 rounded-t-lg capitalize ${
          categoryItem === text
            ? "text-blue-600 border-blue-600 active"
            : "border-transparent hover:text-gray-600 hover:border-gray-300"
        }`}
        onClick={() => handleGetTextTab(text)}
      >
        {text}
      </button>
    </li>
  );
};

export default TabItem;
