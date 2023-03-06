import { Box, Typography } from "@mui/material";
import { shades, textColor } from "../../../theme/theme";
import ServiceCard from "./ServiceCard";
import { serviceList } from "./serviceInfo";

const Services = () => {
  return (
    <Box
      sx={{
        backgroundColor: shades.primary["700"],
        p: "2rem 4rem 4rem 4rem",
        mt: "3rem",
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: textColor.grey, textAlign: "Center" }}
      >
        Our Services
      </Typography>
      <Box
        sx={{
          width: "100%",
          mt: "2rem",
          display: "flex",
          flexWrap: "wrap",
          rowGap: "2rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {serviceList.map((service) => (
          <ServiceCard service={service} />
        ))}
      </Box>
    </Box>
  );
};

export default Services;
