import React from "react";

export default function Checkout({ totalAmount }) {
  return (
    <div className=" w-full p-5 flex flex-col gap-4 bg-white rounded-md shadow-md border">
      <h3 className="text-lg font-bold text-gray-600">The total amount of</h3>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex justify-between items-center text-gray-600">
          <p>Temporary amount</p>
          <p>${totalAmount}</p>
        </div>
        <div className="w-full flex justify-between items-center text-gray-600">
          <p>Shipping</p>
          <p>Gratis</p>
        </div>
        <hr />
        <div className="w-full flex justify-between items-center text-gray-600 font-semibold">
          <p>
            The total amount of
            <br />
            (including VAT)
          </p>
          <p>${totalAmount}</p>
        </div>
      </div>
      <button className="w-full px-5 py-3 bg-blue-500 text-white font-semibold uppercase rounded-md">
        Go To Checkout
      </button>
    </div>
  );
}
