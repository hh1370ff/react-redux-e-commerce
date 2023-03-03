import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Box, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

import { shades } from "../../../../theme/theme";
import useUiContext from "../../../../hooks/useUiContext";

const ICONS = [
  { icon: <CompareArrowsIcon />, text: "Compare Product" },
  { icon: <FavoriteBorderIcon />, text: "Compare Product" },
  { icon: <PersonOutlineOutlinedIcon />, text: "Compare Product" },
  { icon: <ShoppingCartOutlinedIcon />, text: "Compare Product" },
];

const MobileIcon = () => {
  const { setOpenSearch } = useUiContext();

  const content = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        position: "fixed",
        padding: ".2rem",
        bottom: 0,
        backgroundColor: shades.primary["900"],
        zIndex: 10,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {ICONS.map(({ icon, text }, index) => (
          <IconButton key={index}>
            <Badge badgeContent={2} color="secondary">
              {icon}
            </Badge>
          </IconButton>
        ))}
        <IconButton onClick={() => setOpenSearch(true)}>
          <Search sx={{ fontSize: "2rem" }} />
        </IconButton>
      </Box>
    </Box>
  );

  return content;
};

export default MobileIcon;
