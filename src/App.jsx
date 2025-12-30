import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const initialProducts = [
  { id: 1, name: "A", price: 100 },
  { id: 2, name: "B", price: 200 },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [counter, setCounter] = useState(0);

  const totalPrice = useMemo(() => {
    console.log("Calculating total price");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  const handleSelect = useCallback((id) => {
    console.log("Selected product:", id);
  }, []);

  const addItem = () => {
    setProducts((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: `Item ${prev.length + 1}`,
        price: 100,
      },
    ]);
  };

  return (
    <div>
      <h2>Total Price: {totalPrice}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <button onClick={addItem}>
        Add Item
      </button>

      <ProductList
        products={products}
        onSelect={handleSelect}
      />
    </div>
  );
}

export default App;
