import { Box, IconButton, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ReactStars from "react-rating-stars-component";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { shades, textColor } from "../../../theme/theme";

const ItemCard = ({ item }) => {
  const [autoPlayValue, setAutoPlayValue] = useState(false);

  return (
    <Box
      sx={{
        width: "200px",
        height: "325px",
        backgroundColor: shades.primary["900"],
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%", height: "200px", backgroundColor: "blue" }}>
        <Carousel
          infiniteLoop={true}
          autoPlay={autoPlayValue}
          showIndicators={false}
          showArrows={false}
          interval={1000}
          showThumbs={false}
          showStatus={false}
        >
          {item.urls.map((url, index) => {
            return (
              <Box
                key={index}
                onMouseEnter={() => {
                  setAutoPlayValue(true);
                }}
                onMouseLeave={() => {
                  setAutoPlayValue(false);
                }}
              >
                <img src={url} style={{ width: "100%", height: "200px" }} />
              </Box>
            );
          })}
        </Carousel>
      </Box>
      <Box
        sx={{
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          color: textColor.grey,
          position: "relative",
          flex: 1,
        }}
      >
        <Typography variant="caption"> {item.title}</Typography>
        <Typography variant="subtitle2"> {item.shortDescription}</Typography>
        <Box
          sx={{
            position: "absolute",
            bottom: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gam: "0.25rem",
          }}
        >
          <ReactStars value={3} size={16} edit={false} activeColor="#ffd700" />
          <Typography variant="subtitle2">Price: ${item.price}</Typography>
        </Box>
      </Box>
      <IconButton
        sx={{
          backgroundColor: shades.secondary["700"],
          position: "absolute",
          top: "5px",
          right: "5px",
          "&:hover": {
            backgroundColor: shades.secondary["900"],
          },
        }}
      >
        <FavoriteBorderOutlinedIcon
          sx={{
            color: shades.warning["700"],
            "&:hover": {
              color: shades.warning["300"],
            },
          }}
        />
      </IconButton>
    </Box>
  );
};

export default ItemCard;
