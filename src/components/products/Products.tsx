import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

interface IProductsProps {
  categoryItem: any;
}

const Products = ({ categoryItem }: IProductsProps) => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryItem}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [categoryItem]);

  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-left rtl:text-right text-gray-500'>
        <thead className='font-black text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              ID
            </th>
            <th scope='col' className='px-6 py-3'>
              Product name
            </th>
            <th scope='col' className='px-6 py-3'>
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
        <tbody>
          {products &&
            products.map((product) => (
              <ProductItem key={product.id} productItem={product} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
