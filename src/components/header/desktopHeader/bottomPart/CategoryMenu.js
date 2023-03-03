import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";
import { Box, Divider, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRef, useState } from "react";
import { shades, textColor } from "../../../../theme/theme";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CATEGORIES = ["Category 1", "Category 2", "Category 3"];

const CategoryMenu = () => {
  const boxRef = useRef(null);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [currency, setCurrency] = useState("USD $");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(boxRef.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCurrency = (value) => {
    setCurrency(value);
    handleClose();
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        width: "10rem",
      }}
      ref={boxRef}
    >
      <BlurOnOutlinedIcon />
      <Typography
        variant="h6"
        sx={{
          cursor: "pointer",
          color: textColor.primary,
          height: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleClick}
      >
        CategoryMenu
        <KeyboardArrowDownIcon />
      </Typography>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiMenu-paper": {
            width: "12rem",
          },
        }}
      >
        {CATEGORIES.map((currency, index) => (
          <Box>
            <MenuItem
              onClick={() => handleCurrency(currency)}
              key={currency}
              sx={{
                height: "1rem",
              }}
            >
              <Typography variant="h6">{currency}</Typography>
            </MenuItem>
            {index !== CATEGORIES.length - 1 && <Divider />}
          </Box>
        ))}
      </Menu>
    </Box>
  );
};

export default CategoryMenu;
