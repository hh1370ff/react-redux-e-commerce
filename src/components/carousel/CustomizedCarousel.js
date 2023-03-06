import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import SingleBannerImage from "../../pages/home/banner/SingleBannerImage";

const CustomizedCarousel = ({ urlsTexts, height, width }) => {
  const content = (
    <Box
      sx={{
        backgroundColor: "green",
        width: width,
        height: height + "px",
      }}
    >
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        {urlsTexts.map(({ url, text }, index) => (
          <Box key={index} sx={{ height: height + "px" }}>
            <SingleBannerImage url={url} text={text} height={height} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
  return content;
};

export default CustomizedCarousel;
