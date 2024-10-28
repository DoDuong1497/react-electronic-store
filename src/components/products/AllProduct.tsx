import React from "react";
import ProductItem from "./ProductItem";

interface IAllProductProps {
  productList: any[];
}

const AllProduct = ({ productList }: IAllProductProps) => {
  return (
    <tbody>
      {productList.length === 0 ? (
        <tr>
          <td className='text-center' colSpan={6}>
            No data to display
          </td>
        </tr>
      ) : (
        productList.map((productItem) => (
          <ProductItem key={productItem.id} productItem={productItem} />
        ))
      )}
    </tbody>
  );
};

export default AllProduct;
