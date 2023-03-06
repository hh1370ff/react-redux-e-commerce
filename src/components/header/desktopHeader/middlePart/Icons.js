import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Box, IconButton, Tooltip, Typography } from "@mui/material";
import { shades } from "../../../../theme/theme";

const ICONS = [
  { icon: <CompareArrowsIcon />, text: "Compare Product" },
  { icon: <FavoriteBorderIcon />, text: "Compare Product" },
  { icon: <PersonOutlineOutlinedIcon />, text: "Compare Product" },
  { icon: <ShoppingCartOutlinedIcon />, text: "Compare Product" },
];

const Icons = () => {
  const content = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "30%",
      }}
    >
      {ICONS.map(({ icon, text }, index) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "5rem",
            gap: ".1rem",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: shades.primary["400"],
            padding: "0.2rem",
            height: "5rem",
            position: "relative",
          }}
        >
          <Badge
            badgeContent={2}
            color="secondary"
            sx={{
              position: "absolute",
              top: "15px",
              right: "15px",
            }}
          ></Badge>
          {icon}

          <Typography
            variant="caption"
            sx={{ display: "flex", textAlign: "center" }}
          >
            {text}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  return content;
};

export default Icons;
