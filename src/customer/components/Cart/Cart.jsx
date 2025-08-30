import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";

const Cart = () => {
  return (
    <div>
      {/* Cart items */}
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1,1,1,1,1].map((item) => <CartItem />)}
        </div>

        {/* Cart details */}
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border p-5">
            {/* Heading */}
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />

            {/* Price */}
            <div className="space-y-3 font-semibold mt-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹4697</span>
              </div>

              {/* Discount details */}
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">-₹3419</span>
              </div>

              {/* Delivery charge */}
              <div className="flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>

              {/* Total amount */}
              <div className="flex justify-between pt-3  font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹1278</span>
              </div>
            </div>
            <Button
              variant="contained"
              className="w-full"
              sx={{ px: "3rem", py: "1rem", bgcolor: "#9155fd", mt: 3 }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
