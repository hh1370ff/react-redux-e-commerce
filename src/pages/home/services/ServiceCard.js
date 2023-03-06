import { Typography, Box } from "@mui/material";
import { shades, textColor } from "../../../theme/theme";
const ServiceCard = ({ service }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        width: "22%",
        backgroundColor: shades.primary["800"],
        color: textColor.grey,
        height: "200px",
        p: "0.5rem",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {service.serviceIcon}
      </Box>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", color: shades.secondary["500"] }}
      >
        {service.serviceName}
      </Typography>
      <Typography variant="subtitle1">{service.serviceExplanation}</Typography>
    </Box>
  );
};

export default ServiceCard;
