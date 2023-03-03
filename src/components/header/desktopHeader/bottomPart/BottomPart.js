import { Box, Divider } from "@mui/material";
import { shades, textColor } from "../../../../theme/theme";
import { lighten } from "polished";
import CategoryMenu from "./CategoryMenu";
import BottomNav from "./BottomNav";

const BottomPart = () => {
  const bgColor = lighten(0.1, shades.primary[500]);

  return (
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
          gap: "2rem",
          width: "90%",
        }}
      >
        <CategoryMenu />
        <Divider orientation="vertical" flexItem />
        <BottomNav />
      </Box>
    </Box>
  );
};

export default BottomPart;
