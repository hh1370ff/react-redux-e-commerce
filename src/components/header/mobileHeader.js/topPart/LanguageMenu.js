import { Box, Divider, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { textColor } from "../../../../theme/theme";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const LANGUAGES = ["English", "Persian", "Arabic"];

const LanguageMenu = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState("English");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguage = (value) => {
    setLanguage(value);
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
        {language}
        <KeyboardArrowDownIcon />
      </Typography>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiMenu-paper": {
            backgroundColor: theme.palette.primary.main,
          },
          "& ul": {
            py: 0,
          },
        }}
      >
        {LANGUAGES.map((language, index) => (
          <MenuItem
            dense
            divider={index !== LANGUAGES.length - 1 ? true : false}
            key={language}
            onClick={() => handleLanguage(language)}
          >
            <Typography variant="caption">{language}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageMenu;
