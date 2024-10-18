import React from "react";
import TabItem from "./TabItem";

// Active: text-white bg-blue-700 active
// Not Active: hover:text-gray-900 bg-gray-50 hover:bg-gray-100

interface ITabsProps {
  handleGetCategoryItem: any;
  categoryItem: any;
}

const categoryElectronicList = ["all", "laptops", "smartphones", "fragrances"];

const Tabs = ({ handleGetCategoryItem, categoryItem }: ITabsProps) => {
  return (
    <ul className='electronic-tabs flex-column space-y space-y-4 text-gray-500 me-4 mb-0'>
      {categoryElectronicList &&
        categoryElectronicList.map((item, index) => (
          <TabItem
            key={index}
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full capitalize ${
              categoryItem === item
                ? "text-white bg-blue-700 active"
                : "hover:text-gray-900 bg-gray-50 hover:bg-gray-100"
            }`}
            textBtn={item}
            handleGetCategoryItem={handleGetCategoryItem}
          />
        ))}
    </ul>
  );
};

export default Tabs;
