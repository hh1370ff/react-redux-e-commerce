import { Box } from "@mui/material";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const getStyles = () => ({
  wrapper: {
    width: "100%",
    height: { md: "420px", xs: "800px" },
    display: "flex",
    gap: "1rem",
    flexDirection: { xs: "column", lg: "row" },
  },
  left: { flex: "1 1" },
  right: { flex: "1 1" },
});
const Banner = () => {
  const styles = getStyles();

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.left}>
        <LeftBanner />
      </Box>
      <Box sx={styles.right}>
        <RightBanner />
      </Box>
    </Box>
  );
};

export default Banner;
