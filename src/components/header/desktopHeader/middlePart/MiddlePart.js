import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Icons from "./Icons";
import Logo from "./Logo";
import Search from "./Search";
import { textColor } from "../../../../theme/theme";
const getStyles = (theme) => ({
  middle: {
    backgroundColor: theme.palette.primary.main,

    color: textColor.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "6rem",
  },
  middleWrapper: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const MiddlePart = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <Box sx={styles.middle}>
      <Box sx={styles.middleWrapper}>
        <Logo />
        <Search />
        <Icons />
      </Box>
    </Box>
  );
};

export default MiddlePart;
