import React from "react";
import Header from "../components/header/desktopHeader/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileHeader from "../components/header/mobileHeader.js/MobileHeader";
import { useMediaQuery } from "@mui/material";
import MobileSearch from "./MobileSearch";
const MainLayout = () => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {downMd ? <MobileHeader /> : <Header />}
      <Outlet />
      <Footer />
      <MobileSearch />
    </Box>
  );
};

export default MainLayout;
