import { useState } from "react";
// import Products from "./components/products/Products";
import Tabs from "./components/tabs/Tabs";
import Laptop from "./components/products/Laptop";
import Smartphone from "./components/products/Smartphone";
import Fragrances from "./components/products/Fragrances";

const App = () => {
  const [categoryItem, setCategoryItem] = useState<String>("laptops");

  const handleGetTextTab = (text: string) => {
    setCategoryItem(text);
  };

  return (
    <div className='electronic'>
      <h1 className='text-3xl font-black text-center mb-10'>
        Electronic Store
      </h1>

      <div className='electronic-main container mx-auto'>
        <Tabs handleGetTextTab={handleGetTextTab} categoryItem={categoryItem} />
        {categoryItem === 'laptops' && <Laptop />}

        {categoryItem === 'smartphones' && <Smartphone />}

        {categoryItem === 'fragrances' && <Fragrances />}

        {/* <Products categoryItem={categoryItem} /> */}
      </div>
    </div>
  );
};

export default App;
