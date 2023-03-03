import { Box, Divider } from "@mui/material";
import TopPart from "./topPart/TopPart";
import MiddlePart from "./middlePart/MiddlePart";
import BottomPart from "./bottomPart/BottomPart";

const Header = () => {
  let content = (
    <Box>
      <TopPart />
      <Divider />
      <MiddlePart />
      <BottomPart />
    </Box>
  );
  return content;
};

export default Header;
