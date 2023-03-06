import { bannersData } from "./bannerImages";

import CustomizedCarousel from "../../../components/carousel/CustomizedCarousel";
const LeftBanner = ({}) => {
  const urlsTexts = bannersData[0].bannerData;
  return (
    <CustomizedCarousel urlsTexts={urlsTexts} height="410px" width="100%" />
  );
};

export default LeftBanner;
