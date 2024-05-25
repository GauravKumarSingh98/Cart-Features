import { useReducer, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="w-[100]">
      <h2 className="text-center font-bold bg-orange-100 text-4xl">Shopping App</h2>
      <ProductList />
      <ShoppingCart />
    </div>
  );
}

export default App;
