import LanguageMenu from "./LanguageMenu";
import CurrencyMenu from "./CurrencyMenu";
import { Box, Typography } from "@mui/material";
import { textColor } from "../../../../theme/theme";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MobileLogo from "./MobileLogo";

const getStyles = (theme) => ({
  headerWrapper: {},

  top: {
    backgroundColor: theme.palette.primary.main,
    color: textColor.grey,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "3rem",
  },
  topWrapper: {
    width: "95%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topBoxRight: {
    display: "flex",
    alignItems: "center",
  },
});

const MobileTopPart = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <Box sx={styles.top}>
      <Box sx={styles.topWrapper}>
        <Box sx={styles.topBoxRight}>
          <MenuIcon sx={{ fontSize: "2.5rem" }} />
        </Box>
        <MobileLogo />
        <Box sx={styles.topBoxRight}>
          <LanguageMenu />
          <CurrencyMenu />
        </Box>
      </Box>
    </Box>
  );
};

export default MobileTopPart;
