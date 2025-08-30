import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
  // Function to handle form submit.
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget); // Retrieve form data.

    const addressDetails = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zipCode"),
      mobile: data.get("contactNumber"),
    };

    console.log(addressDetails);
  };

  return (
    <div>
      <Grid container spacing={4}>
        {/* Previous delivery address */}
        <Grid
          size={{ xs: 12, lg: 5 }}
          className="border rounded-e-md shadow-md h-[30rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        {/* New delivery address form */}
        <Grid size={{ xs: 12, lg: 7 }}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3} justifyContent="center">
                {/* First Name */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                {/* Last Name */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>

                {/* Address */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="address"
                    multiline
                    rows={4}
                  />
                </Grid>

                {/* City */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="city"
                  />
                </Grid>

                {/* State */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State / Province / Region"
                    fullWidth
                    autoComplete="state"
                  />
                </Grid>

                {/* Zip code */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="zipCode"
                    name="zipCode"
                    label="Zip Code / Postal Code"
                    fullWidth
                    autoComplete="zip-code"
                  />
                </Grid>

                {/* Contact number */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="contactNumber"
                    name="contactNumber"
                    label="Contact Number"
                    fullWidth
                    autoComplete="contact-number"
                  />
                </Grid>

                {/* Deliver Here button */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Button
                    sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
