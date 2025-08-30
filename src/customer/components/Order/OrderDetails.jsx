import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      {/* Address */}
      <div>
        <h1 className="font-bold text-xl py-5">Delivery Address</h1>
        <AddressCard />
      </div>

      {/* Order tracker */}
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      {/* Orders list */}
      <Grid container className="space-y-5">
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            container
            className="shadow-xl rounded-md p-5 border w-full"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid size={{ xs: 6 }}>
              <div className="flex items-center space-x-5">
                {/* Image */}
                <img
                  className="w-[5rem] h-[7rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70"
                  alt=""
                />

                {/* Product description */}
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Mens Shirt</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: White</span>
                    <span>Size: M</span>
                  </p>
                  <p>Seller: Linaria</p>
                  <p>₹4697</p>
                </div>
              </div>
            </Grid>

            {/* Product rating */}
            <Grid>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "3rem" }} className="px-2" />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
