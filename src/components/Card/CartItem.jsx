import React from "react";
import { useDispatch } from "react-redux";

import { BsDot } from "react-icons/bs";
import { FaTrashAlt, FaHeart } from "react-icons/fa";
import { HiPlus, HiMinus } from "react-icons/hi";

import {
  addQuantity,
  decQuantity,
  removeItems,
} from "../../utils/redux/reducers/reducer";

export default function CartItem({
  id,
  name,
  type,
  size,
  color,
  price,
  image,
  amount,
}) {
  const dispatch = useDispatch();

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
            <button
              onClick={() => dispatch(removeItems(id))}
              className="flex items-center gap-1 uppercase"
            >
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
              {amount === 1 ? (
                <HiMinus className="w-1/3 h-full text-lg border-r p-2 bg-gray-200 fill-gray-400" />
              ) : (
                <HiMinus
                  onClick={() => dispatch(decQuantity(id))}
                  className="w-1/3 h-full text-lg border-r p-2 cursor-pointer"
                />
              )}

              <p className="w-1/3 text-base text-center">{amount}</p>
              <HiPlus
                onClick={() => dispatch(addQuantity(id))}
                className="w-1/3 h-full text-lg  border-l p-2 cursor-pointer"
              />
            </form>
            <p className="font-medium text-sm">(Note, 1 piece)</p>
          </div>
          <p className="text-lg font-bold text-gray-600">${price}</p>
        </div>
      </div>
    </div>
  );
}
