import React from "react";
import ProductList from "./ProductList";

interface IProductsProps {
  productList: any[];
}

const Products = ({ productList }: IProductsProps) => {
  return (
    <table className='w-full text-left rtl:text-right text-gray-500'>
      <thead className='text-gray-700 uppercase bg-gray-100'>
        <tr>
          <th scope='col' className='px-6 py-3'>
            ID
          </th>
          <th scope='col' className='px-6 py-3'>
            Thumbnail
          </th>
          <th scope='col' className='px-6 py-3'>
            Product name
          </th>
          <th scope='col' className='px-6 py-3 w-80'>
            Description
          </th>
          <th scope='col' className='px-6 py-3'>
            Category
          </th>
          <th scope='col' className='px-6 py-3'>
            Price
          </th>
        </tr>
      </thead>
      <ProductList productList={productList} />
    </table>
  );
};

export default Products;
