import { Box, Typography } from "@mui/material";

const NAV_ITEMS = ["HOME", "OUR STORE", "BLOGS", "CONTACT"];
const BottomNav = () => {
  const content = (
    <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      {NAV_ITEMS.map((navItem, index) => (
        <Typography key={index} variant="h6">
          {navItem}
        </Typography>
      ))}
    </Box>
  );
  return content;
};

export default BottomNav;
