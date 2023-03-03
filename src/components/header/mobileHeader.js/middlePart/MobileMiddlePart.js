import { Box, Typography } from "@mui/material";
import { lighten } from "polished";
import { shades, textColor } from "../../../../theme/theme";

const NAV_ITEMS = ["HOME", "OUR STORE", "BLOGS", "CONTACT"];
const MobileMiddlePart = () => {
  const bgColor = lighten(0.1, shades.primary[500]);
  const content = (
    <Box
      sx={{
        backgroundColor: bgColor,
        height: "2rem",
        color: textColor.grey,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          width: "90%",
        }}
      >
        {NAV_ITEMS.map((navItem, index) => (
          <Typography key={index} variant="caption">
            {navItem}
          </Typography>
        ))}
      </Box>
    </Box>
  );

  return content;
};

export default MobileMiddlePart;
