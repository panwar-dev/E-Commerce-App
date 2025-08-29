import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        {/* For Avatar */}
        <Grid size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              P
            </Avatar>
          </Box>
        </Grid>

        {/* For details */}
        <Grid size={{ xs: 9 }}>
          <div className="space-y-2">
            {/* Customer details */}
            <div>
              <p className="font-semibold text-lg">Panwar</p>
              <p className="opacity-70">August 17, 2025</p>
            </div>
          </div>

          {/* Product half-rating */}
          <Rating value={4} name="half-rating" readOnly precision={0.5} />

          {/* Product review */}
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
