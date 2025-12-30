
import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const App = () => {
  const [counter, setCounter] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
    
  ];

  
  const totalPrice = useMemo(() => {
    console.log("Recalculating total price...");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  
  const handleProductSelect = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);

  return (
    <div>
      <h1>React Performance Optimization</h1>
      <p>Total Price: ${totalPrice}</p>

      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter ({counter})
      </button>

      <ProductList products={products} onSelect={handleProductSelect} />
    </div>
  );
};

export default App;