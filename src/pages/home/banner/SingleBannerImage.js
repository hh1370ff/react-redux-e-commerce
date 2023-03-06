import { Box, Button, IconButton, Typography } from "@mui/material";
import { shades, textColor } from "../../../theme/theme";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const SingleBannerImage = ({ url, text, height }) => {
  console.log(
    "🚀 ~ file: singleBannerImage.js:6 ~ SingleBannerImage ~ height:",
    height
  );
  return (
    <Box
      sx={{
        height: height,
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Button
          sx={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
            color: textColor.grey,
            fontWeight: 700,
            borderRadius: "0px",
          }}
        >
          Best seller
        </Button>
        <IconButton
          sx={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            backgroundColor: shades.secondary["500"],
            "&: hover": {
              backgroundColor: shades.secondary["700"],
            },
            color: shades.info["500"],
          }}
        >
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          color: textColor.grey,
          position: "absolute",
          bottom: 0,
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {text && (
          <Typography variant="h4" sx={{ mx: "1rem", py: "1rem" }}>
            {text}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SingleBannerImage;
