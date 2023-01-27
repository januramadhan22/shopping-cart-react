import React from "react";
import { BsDot } from "react-icons/bs";
import { FaTrashAlt, FaHeart } from "react-icons/fa";

export default function CartItem({ name, type, size, color, price, image }) {
  return (
    <div className="w-full flex items-start gap-5">
      {/* Left Content */}
      <img src={image} alt={name} className="w-32 rounded-md" />

      <div className="w-full h-fit flex justify-between">
        {/* Middle Content */}
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="text-lg font-bold text-gray-600">{name}</h3>
            <div className="flex gap-0.5 items-center uppercase text-gray-600 font-medium text-sm">
              <p>{type}</p>
              <BsDot />
              <p>{color}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 uppercase text-gray-600 font-medium text-sm">
            <p>Color: {color}</p>
            <p>Size: {size}</p>
          </div>
          <div className="flex gap-5 items-center text-gray-600 font-medium text-sm">
            <button className="flex items-center gap-1 uppercase">
              <FaTrashAlt /> Remove Item
            </button>
            <button className="flex items-center gap-1 uppercase">
              <FaHeart />
              Move to Wishlist
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-1/4 flex flex-col justify-between items-end">
          <div className="w-full flex flex-col items-center gap-2">
            <form className="w-11/12 flex items-center h-9 text-lg border rounded-md">
              <button className="w-1/3 h-full border-r px-3 font-bold">
                -
              </button>
              <input
                type="text"
                placeholder="1"
                className="w-1/3 h-full text-base text-center focus:outline-none"
              />
              <button className="w-1/3 h-full border-l px-3 font-bold">
                +
              </button>
            </form>
            <p className="font-medium text-sm">(Note, 1 piece)</p>
          </div>
          <p className="text-lg font-bold text-gray-600">${price}</p>
        </div>
      </div>
    </div>
  );
}
