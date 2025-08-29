import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

// This component is the item displayed in the cart page.
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        {/* Image */}
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
            alt=""
          />
        </div>

        {/* Product details */}
        <div className="ml-5 space-y-1">
          {/* description */}
          <p className="font-semibold">Men Slim Yellow Kurta</p>
          <p className="opacity-70">Size: L, Yellow</p>
          <p className="opacity-70 mt-2">Seller: Universaloutfit</p>

          {/* Price */}
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹199</p>
            <p className="line-through opacity-50">₹199</p>
            <p className="text-green-600 font-semibold">70% off</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          {/* Decrease button */}
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>

          {/* Product count */}
          <span className="py-1 px-7 border rounded-sm">5</span>

          {/* Increase button */}
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        {/* Remove button */}
        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
