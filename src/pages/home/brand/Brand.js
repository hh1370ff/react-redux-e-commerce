import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import { brands } from "./brandUrls";
import { shades } from "../../../theme/theme";
const Brand = () => {
  return (
    <Marquee gradientColor={[11, 24, 46]}>
      <Box
        sx={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
      >
        {brands.map((url) => (
          <Box
            style={{
              width: "100px",
              height: "100px",
            }}
          >
            <img
              src={url}
              style={{
                width: "95%",
                height: "95%",
              }}
            />
          </Box>
        ))}
      </Box>
    </Marquee>
  );
};

export default Brand;
