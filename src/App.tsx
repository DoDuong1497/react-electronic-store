import { useEffect, useState } from "react";
import Panigations from "./components/Panigations/Panigations";
import Products from "./components/products/Products";
import Tabs from "./components/tabs/Tabs";
import AllProduct from "./components/products/AllProduct";
import Laptops from "./components/products/Laptops";
import Smartphones from "./components/products/Smartphones";
import Fragrances from "./components/products/Fragrances";

const App = () => {
  const [categoryItem, setCategoryItem] = useState<String>("all");
  const [productList, setProductList] = useState<any[]>([]);
  const [totalProduct, setTotalProduct] = useState<Number>(0);
  const [limit, setLimit] = useState<Number>(10);
  const [page, setPage] = useState<Number>(0);

  const handleGetCategoryItem = (value: String) => {
    setCategoryItem(value);
  };

  const handleGetQuantity = (value: String) => {
    setLimit(Number(value));
  };

  const handleChangePage = (value: Number) => {
    setPage(Number(value));
  };

  const handleNextPage = () => {
    setPage((prevState): Number => Number(prevState) + 1);
  };

  const handlePrevPage = () => {
    setPage((prevState): Number => Number(prevState) - 1);
  };

  useEffect(() => {
    fetch(
      categoryItem === "all"
        ? `https://dummyjson.com/products?limit=${limit}&skip=${page}`
        : `https://dummyjson.com/products/category/${categoryItem}?limit=${limit}&skip=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalProduct(data.total);
        setProductList(data.products);
      });
  }, [categoryItem, limit, page]);

  // console.log(totalProduct);
  // console.log(productList);

  return (
    <div className='electronic'>
      <h1 className='text-4xl font-black text-center mt-4 mb-10'>
        Electronics Stores
      </h1>

      <div className='electronic-main container mx-auto mb-5'>
        <div className='flex'>
          <Tabs
            handleGetCategoryItem={handleGetCategoryItem}
            categoryItem={categoryItem}
          />

          <div className='electronic-products min-h-[500px] p-4 bg-slate-50 text-gray-500 rounded-lg w-full'>
            <div className='electronic-products__header border-b-2 border-slate-200 border-solid pb-5 mb-5'>
              <h3 className='text-2xl font-bold text-gray-900 mb-2 capitalize'>
                {categoryItem === "all"
                  ? "All Product"
                  : `${categoryItem} product`}
              </h3>
              <p className='text-xs italic'>
                {totalProduct.toString()} product
              </p>
            </div>

            <div className='electronic-products__main'>
              <div className='electronic-products__filter mb-5 flex justify-end'>
                <div className='max-w-[300px] flex items-center gap-2'>
                  <label htmlFor='quantity' className='text-sm text-gray-900'>
                    Showing
                  </label>
                  <select
                    id='quantity'
                    className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5'
                    onChange={(e) => handleGetQuantity(e.target.value)}
                  >
                    <option selected>Select product quantity</option>
                    <option value='10'>10 product</option>
                    <option value='20'>20 product</option>
                    <option value='30'>30 product</option>
                  </select>
                </div>
              </div>

              <div className='relative overflow-x-auto'>
                {categoryItem === "all" && (
                  <AllProduct productList={productList} />
                )}
                {categoryItem === "laptops" && (
                  <Laptops productList={productList} />
                )}
                {categoryItem === "smartphones" && (
                  <Smartphones productList={productList} />
                )}
                {categoryItem === "fragrances" && (
                  <Fragrances productList={productList} />
                )}

                {/* <Products productList={productList} /> */}

                <nav
                  className='flex items-center flex-column flex-wrap flex-row justify-between pt-4'
                  aria-label='Table navigation'
                >
                  <span className='text-sm text-gray-500 block'>
                    Showing{" "}
                    <span className='font-bold text-gray-900'>
                      {limit.toString()}
                    </span>{" "}
                    product
                  </span>

                  <Panigations
                    totalProduct={totalProduct}
                    limit={limit}
                    page={page === 0 ? 1 : page}
                    handleChangePage={handleChangePage}
                    handleNextPage={handleNextPage}
                    handlePrevPage={handlePrevPage}
                  />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
