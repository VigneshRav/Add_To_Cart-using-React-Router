import React from "react";

const ProductCard = ({ product, inCart, handleAddToCart }) => (
  <div className="border-2 border-cyan-500 p-4 flex flex-col">
    <img
      src={product.image}
      alt={product.title}
      className="h-40 object-contain mb-2"
    />
    <h2 className="font-bold">{product.title}</h2>
    <div className="text-amber-950 pt-4 font-semibold">
      <p>Rating: ⭐ {product.rating.rate}/5</p>
      <p>Stock Available: {product.rating.count}</p>
    </div>

    <h3 className="text-red-600 py-2 font-bold">Price: ${product.price}</h3>

    <button
      onClick={() => handleAddToCart(product)}
      className={`mt-auto px-4 py-2 ${
        inCart ? "bg-red-500" : "bg-green-500"
      } text-white mt-4 rounded cursor-pointer`}
    >
      {inCart ? "Remove from Cart" : "Add to Cart"}
    </button>
  </div>
);

export default ProductCard;
