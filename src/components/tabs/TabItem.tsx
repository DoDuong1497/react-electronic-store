import React from "react";
import Button from "../button/Button";

interface ITabItemProps {
  className: string;
  textBtn: string;
  handleGetCategoryItem: any;
}

const TabItem = ({
  className,
  textBtn,
  handleGetCategoryItem,
}: ITabItemProps) => {
  return (
    <li>
      <Button
        className={className}
        textBtn={textBtn}
        onClick={() => handleGetCategoryItem(textBtn)}
      />
    </li>
  );
};

export default TabItem;
