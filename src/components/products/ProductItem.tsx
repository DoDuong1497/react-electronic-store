import React from "react";

interface IProductItemProps {
  productItem: any;
}

interface IProductItem {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  price: number;
}

const ProductItem = ({ productItem }: IProductItemProps) => {
  const { id, thumbnail, title, description, category, price }: IProductItem =
    productItem;

  return (
    <tr className='bg-white text-sm border-b hover:bg-gray-200'>
      <td className='px-6 py-4'>{id}</td>
      <td className='px-6 py-4'>
        <img
          className='h-auto max-w-[75px] rounded-lg'
          src={thumbnail}
          alt={title}
        />
      </td>
      <th scope='row' className='px-6 py-4 text-gray-900 whitespace-nowrap'>
        {title}
      </th>
      <td className='px-6 py-4'>{description}</td>
      <td className='px-6 py-4 capitalize'>{category}</td>
      <td className='px-6 py-4'>{"$" + price}</td>
    </tr>
  );
};

export default ProductItem;
