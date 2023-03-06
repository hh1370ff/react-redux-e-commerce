import { Box } from "@mui/material";
import CustomizedCarousel from "../../../components/carousel/CustomizedCarousel";
import { bannersData } from "./bannerImages";

const RightBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        rowGap: "10px",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      {bannersData.splice(1).map((item, index) => {
        const urlsTexts = item.bannerData.map(({ url, text }) => ({
          url,
          text: "",
        }));

        return (
          <CustomizedCarousel
            urlsTexts={urlsTexts}
            key={index}
            height="200px"
            width="49%"
          />
        );
      })}
    </Box>
  );
};

export default RightBanner;
