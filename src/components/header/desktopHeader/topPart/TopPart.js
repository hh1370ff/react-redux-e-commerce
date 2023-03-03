import LanguageMenu from "./LanguageMenu";
import CurrencyMenu from "./CurrencyMenu";
import { Box, Typography } from "@mui/material";
import { textColor } from "../../../../theme/theme";
import { useTheme } from "@mui/material/styles";

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
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topBoxRight: {},
  topBoxLeft: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
});

const TopPart = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <Box sx={styles.top}>
      <Box sx={styles.topWrapper}>
        <Box sx={styles.topBoxRight}>
          <Typography variant="h6">Free shipping and returns</Typography>
        </Box>
        <Box sx={styles.topBoxLeft}>
          <Typography variant="h6">Phone: +9999999999</Typography>
          <LanguageMenu />
          <CurrencyMenu />
        </Box>
      </Box>
    </Box>
  );
};

export default TopPart;
