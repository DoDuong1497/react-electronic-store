import React from "react";

interface IProductItemProps {
  productItem: any;
}

interface IProductItem {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
}

const ProductItem = ({ productItem }: IProductItemProps) => {
  const { id, title, description, category, price }: IProductItem = productItem;

  return (
    <tr className='bg-white border-b text-sm'>
      <th
        scope='row'
        className='px-6 py-4 font-bold text-gray-900 whitespace-nowrap'
      >
        {id}
      </th>
      <th
        scope='row'
        className='px-6 py-4 font-bold text-gray-900 whitespace-nowrap'
      >
        {title}
      </th>
      <td className='px-6 py-4 w-[500px]'>{description}</td>
      <td className='px-6 py-4 capitalize'>{category}</td>
      <td className='px-6 py-4'>$ {price}</td>
    </tr>
  );
};

export default ProductItem;
