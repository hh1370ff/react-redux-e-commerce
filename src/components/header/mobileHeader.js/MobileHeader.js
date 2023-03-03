import MobileMiddlePart from "./middlePart/MobileMiddlePart";
import MobileTopPart from "./topPart/MobileTopPart";
import MobileIcon from "./fixedBottom/MobileIcon";
import { Box } from "@mui/material";
const MobileHeader = () => {
  return (
    <Box>
      <MobileTopPart />
      <MobileMiddlePart />
      <MobileIcon />
    </Box>
  );
};

export default MobileHeader;
