import { Slide, Box, TextField } from "@mui/material";
import { lighten } from "polished";
import { Search } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material";
import useUiContext from "../hooks/useUiContext";
import { shades } from "../theme/theme";

export const SlideContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  overflow: "hidden",
  height: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const MobileSearch = () => {
  const { openSearch, setOpenSearch } = useUiContext();
  const content = (
    <Slide in={openSearch} direction="down" timeout={500}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          zIndex: 20,
          position: "fixed",
          top: 0,
          backgroundColor: lighten(0.2, shades.primary["300"]),
          opacity: ".9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            gap: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TextField sx={{ flex: 1 }} variant="standard" />
          <Search sx={{ cursor: "hover" }} />
          <CloseIcon
            sx={{ cursor: "hover" }}
            onClick={() => setOpenSearch((pre) => !pre)}
          />
        </Box>
      </Box>
    </Slide>
  );
  return content;
};

export default MobileSearch;
