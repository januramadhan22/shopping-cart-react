import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../components/Card/CartItem";
import Checkout from "../components/Card/Checkout";
import Discount from "../components/Card/Discount";
import Header from "../components/Header";

import { getCartTotal } from "../utils/redux/reducers/reducer";

function App() {
  const dispatch = useDispatch();

  const { items, totalCount, totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);

  return (
    <div className="w-screen min-h-screen bg-white flex flex-col items-center gap-6">
      <Header />
      <div className="w-11/12 flex flex-col md:flex-row gap-6">
        {/* List Item */}
        <div className="w-full md:w-8/12 lg:w-9/12 mb-0 sm:mb-5 p-5 flex flex-col gap-5 bg-white shadow-md rounded-md border">
          <h3 className="text-lg font-bold text-gray-600">
            Cart ({totalCount} Items)
          </h3>
          {items.length !== 0 ? (
            items.map((item) => (
              <>
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.productName}
                  type={item.productType}
                  color={item.color}
                  size={item.size}
                  price={item.price}
                  image={item.image}
                  amount={item.amount}
                />
                <hr />
              </>
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center font-bold text-3xl">
              Your Shopping Cart is Empty
            </div>
          )}
        </div>

        {/* Checkout Form */}
        <div className="w-full md:w-4/12 lg:w-3/12 relative mb-5">
          <div className="w-full flex flex-col gap-5 sticky bottom-5 sm:top-5">
            <Checkout totalAmount={totalAmount} />
            <Discount />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
