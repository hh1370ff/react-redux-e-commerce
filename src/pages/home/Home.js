import { Box } from "@mui/system";
import React from "react";
import Banner from "./banner/Banner";
import { useTheme } from "@mui/material/styles";
import { lighten } from "polished";
import { shades } from "../../theme/theme";
import Services from "./services/Services";
import { Divider } from "@mui/material";
import Categories from "./categories/Categories";
import Brand from "./brand/Brand";
import BlogSection from "./blogSection/BlogSection";
import FeaturedCollection from "./featuredCollection/FeaturedCollection";

const getStyles = (theme) => ({
  home: {
    display: "flex",
    justifyContent: "center",
    my: "4rem",
  },
  homeWrapper: { width: "90%" },
});
const Home = () => {
  const theme = useTheme();

  const styles = getStyles(theme);
  return (
    <Box sx={styles.home}>
      <Box sx={styles.homeWrapper}>
        <Banner />
        <Divider flexItem sx={{ mt: "3rem" }} />
        <Services />
        <Divider flexItem sx={{ my: "3rem" }} />
        <Categories />
        <Divider flexItem sx={{ my: "3rem" }} />
        <Brand />
        <Divider flexItem sx={{ my: "3rem" }} />
        <BlogSection />
        <Divider flexItem sx={{ my: "3rem" }} />
        <FeaturedCollection />
        <Divider flexItem sx={{ my: "3rem" }} />
      </Box>
    </Box>
  );
};

export default Home;
