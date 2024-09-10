import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, products }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="text-center text-2xl font-bold mb-6">Your Cart</div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            const product = products.find((product) => product.id === item.id);

            return (
              <div key={item.id} className="border p-4 rounded-lg shadow-md">
                {product && (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover mb-4 transform transition duration-300 hover:scale-105"
                  />
                )}
                <h2 className="text-lg font-medium">{product.title}</h2>
                <p className="text-gray-500">Rs.{product.price}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>

                <Link
                  to={`/product-view/${item.id}`}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block"
                >
                  View Details
                </Link>
                <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 inline-block w-full">
                  Buy Now
                </button>
              </div>
            );
          })
        ) : (
          <div className="text-center text-lg col-span-full">
            Your cart is empty.
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="mt-8 p-4 border-t">
          <div className="text-right text-xl font-bold mb-4">
            Total Price: Rs.{totalPrice}
          </div>
          <button className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 text-lg">
            Proceed to Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
