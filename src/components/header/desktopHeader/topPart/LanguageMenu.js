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
      }}
    >
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
        }}
      >
        {LANGUAGES.map((language, index) => (
          <Box>
            <MenuItem
              key={language}
              onClick={() => handleLanguage(language)}
              sx={{ height: ".75rem" }}
            >
              <Typography variant="h6">{language}</Typography>
            </MenuItem>
            {index !== LANGUAGES.length - 1 && <Divider />}
          </Box>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageMenu;
