import React, { useState } from "react";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const isSelected = (id) => selectedItems.includes(id);

  const groupedCart = cart.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  const selectedCart = cart.filter((item) => selectedItems.includes(item.id));
  const total = selectedCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = total * 0.1;
  const finalTotal = total - discount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <Link
        to="/"
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-red-600 cursor-pointer"
      >
        ⬅ Back
      </Link>
      <h1 className="text-3xl mt-4 font-bold text-center mb-10 text-gray-800">
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <img
          src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg"
          alt="Your Cart is Empty"
          className="h-60 w-full object-contain mb-4"
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {/* Left: Cart Items */}
          <div className="md:col-span-2 space-y-10">
            {Object.entries(groupedCart).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-xl font-extralight font-serif text-violet-900 border-l-4 border-orange-600 pl-3 mb-4 uppercase">
                  {category}
                </h2>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="relative  border border-amber-800">
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        checked={isSelected(item.id)}
                        onChange={() => toggleSelect(item.id)}
                        className="absolute top-0.5 left-1 w-5 h-6 z-10 accent-green-600 cursor-pointer"
                        title="Select item"
                      />
                      <CartItem
                        item={item}
                        updateQuantity={updateQuantity}
                        removeFromCart={removeFromCart}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Total Price Card */}
          <div className="border-2 border-amber-900 rounded text-center shadow-lg p-6 h-fit sticky top-6">
            <h2 className="text-xl font-serif font-bold mb-4 text-gray-800">
              Price Details for Selected Items
            </h2>
            {selectedItems.length === 0 ? (
              <p className="text-sm">No items selected.</p>
            ) : (
              <>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Discount (10%)</span>
                    <span>- ${discount.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-gray-800">
                    <span>Final Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
                <button className="mt-6 font-serif w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition cursor-pointer">
                  Proceed to Buy
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
