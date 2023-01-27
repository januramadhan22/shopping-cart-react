import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Discount() {
  const [openDisc, setOpenDisc] = useState(false);

  return (
    <div
      onClick={() => setOpenDisc(!openDisc)}
      className="w-full p-5 flex justify-between items-center bg-white rounded-md shadow-md border cursor-pointer"
    >
      <p className="text-sm">Add a discount code (optional)</p>
      <IoIosArrowDown
        className={`transition ease-linear duration-200 ${
          openDisc && "-rotate-180"
        }`}
      />
    </div>
  );
}
