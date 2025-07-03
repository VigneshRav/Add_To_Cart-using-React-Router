import React from "react";

const CartItem = ({ item, updateQuantity, removeFromCart }) => (
  <div className="flex items-center justify-between border p-4">
    <div>
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-contain rounded-lg border border-gray-200"
      />
      <h3 className="font-bold">{item.title}</h3>
      <p>
        ${item.price.toFixed(2)} x {item.quantity} = $
        {(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
    <div className="flex items-center gap-2">
      <button
        className="bg-gray-300 px-2 rounded"
        onClick={() => updateQuantity(item.id, "decrease")}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button
        className="bg-gray-300 px-2 rounded"
        onClick={() => updateQuantity(item.id, "increase")}
      >
        +
      </button>
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 text-white px-3 py-1 ml-4 rounded cursor-pointer"
      >
        Remove
      </button>
    </div>
  </div>
);

export default CartItem;
