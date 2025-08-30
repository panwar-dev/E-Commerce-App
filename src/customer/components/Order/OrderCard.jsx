import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";

function OrderCard() {
  return (
    <div className="p-5 shadow-lg hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        {/* Image */}
        <Grid size={{ xs: 6 }}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] hp[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70"
              alt=""
            />
            {/* Image description */}
            <div className="ml-5 space-y-2">
              <p>Mens Shirt</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: White</p>
            </div>
          </div>
        </Grid>

        {/* Price */}
        <Grid size={{ xs: 2 }}>
          <p>₹4697</p>
        </Grid>

        {/* Order status */}
        <Grid size={{ xs: 4 }}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered On 30 August, 2025</span>
              </p>
              <p className="text-xs">Your Item Has Been Delivered</p>
            </div>
          )}

          {false && (
            <p>
              <span>Expected Delivery On 30 August, 2025</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard;
