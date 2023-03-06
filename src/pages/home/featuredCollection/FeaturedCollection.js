import { Box, Typography } from "@mui/material";
import React from "react";
import { shades, textColor } from "../../../theme/theme";
import ItemCard from "./ItemCard";
import { ProductsInfo } from "./itemsInfo";
const FeaturedCollection = () => {
  return (
    <Box
      sx={{
        backgroundColor: shades.primary["700"],
        padding: "2rem 4rem 4rem 4rem",
        display: "flex",
        flexDirection: "column",
        color: textColor.grey,
        gap: "2rem",
      }}
    >
      <Typography variant="h3"> Featured Collections</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {ProductsInfo.map((ProductInfo) => (
          <ItemCard item={ProductInfo} />
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedCollection;
