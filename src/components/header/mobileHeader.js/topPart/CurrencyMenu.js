import { Box, Divider, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { textColor } from "../../../../theme/theme";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CURRENCIES = ["USD $", "USD $", "USD $"];

const CurrencyMenu = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [currency, setCurrency] = useState("USD $");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
        width: "5rem",
        height: "3rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          cursor: "pointer",
          color: textColor.primary,
          height: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleClick}
      >
        {currency}
        <KeyboardArrowDownIcon />
      </Typography>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {CURRENCIES.map((currency, index) => (
          <MenuItem
            dense
            key={index}
            divider={index !== CURRENCIES.length - 1 ? true : false}
            onClick={() => handleCurrency(currency)}
            sx={{
              "& .MuiMenu-paper": {
                backgroundColor: theme.palette.primary.main,
              },
              "& ul": {
                py: 0,
              },
            }}
          >
            <Typography variant="caption">{currency}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default CurrencyMenu;
