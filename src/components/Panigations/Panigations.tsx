import React from "react";
import PanigationItem from "./PanigationItem";

// Active: bg-blue-50 hover:bg-blue-100 hover:text-blue-70
// Not Active: leading-tight text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700

interface IPanigationsProps {
  totalProduct: any;
  limit: any;
  page: any;
  handleChangePage: any;
  handleNextPage: any;
  handlePrevPage: any;
}

const Panigations = ({
  totalProduct,
  limit,
  page,
  handleChangePage,
  handleNextPage,
  handlePrevPage,
}: IPanigationsProps) => {
  const pageList = [];
  const totalPage = Math.ceil(totalProduct / limit);

  for (let i = 1; i <= totalPage; i++) {
    pageList.push(i);
  }

  return (
    <ul className='inline-flex -space-x-px rtl:space-x-reverse text-sm h-8'>
      <PanigationItem
        className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700'
        textBtn='Previous'
        onClick={page === 1 ? "" : handlePrevPage}
      />

      {pageList &&
        pageList.map((pageItem, index) => (
          <PanigationItem
            key={index}
            className={`flex items-center justify-center px-3 h-8 border ${
              pageItem === page
                ? "bg-blue-50 hover:bg-blue-100 hover:text-blue-70"
                : "eading-tight text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            }`}
            textBtn={pageItem.toString()}
            onClick={handleChangePage}
          />
        ))}

      <PanigationItem
        className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700'
        textBtn='Next'
        onClick={page === pageList[pageList.length - 1] ? "" : handleNextPage}
      />
    </ul>
  );
};

export default Panigations;
