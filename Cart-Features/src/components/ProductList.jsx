import React, { useContext } from "react";
import { CartContextt } from "../context/CartContext";
import { FaShoppingBag } from "react-icons/fa";
import { TERipple } from "tw-elements-react";

const products = [
  { id: 1, name: "Iphone 15 pro max", price: 150000 },
  { id: 2, name: "Iphone 15 ", price: 70000 },
  { id: 3, name: "pixel 8a", price: 85000 },
];

const ProductList = () => {
  const { dispatch } = useContext(CartContextt);

  const handleAdd = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <div className="gap-4 m-2">
      <h2 className="flex gap-4 text-4xl font-bold">
        <FaShoppingBag />
        Products
      </h2>
      {products.map((product) => (
        <div
          key={product.id}
          className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {product.name}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {product.price}
            </p>
            <TERipple>
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                onClick={() => handleAdd(product)}
              >
                Add to Cart
              </button>
            </TERipple>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
