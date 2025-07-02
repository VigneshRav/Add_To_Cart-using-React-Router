import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

const Products = ({ cart, handleAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          inCart={!!cart.find((item) => item.id === product.id)}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default Products;
