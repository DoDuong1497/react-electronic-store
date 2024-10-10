import React from "react";
import TabItem from "./TabItem";

interface ITabsProps {
  handleGetTextTab: any;
  categoryItem: any;
}

const categoryList = ["laptops", "smartphones", "fragrances"];

const Tabs = ({ handleGetTextTab, categoryItem }: ITabsProps) => {
  return (
    <div className='font-bold text-center text-gray-500 border-b border-gray-200 mb-6'>
      <ul className='flex flex-wrap justify-center -mb-px'>
        {categoryList &&
          categoryList.map((item, index) => (
            <TabItem
              key={index}
              text={item}
              handleGetTextTab={handleGetTextTab}
              categoryItem={categoryItem}
            />
          ))}
      </ul>
    </div>
  );
};

export default Tabs;
