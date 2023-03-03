import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { shades, textColor } from "../../../../theme/theme";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Search = () => {
  const theme = useTheme();
  const searchButton = (
    <Button
      variant="contained"
      sx={{
        border: `1px solid ${textColor.grey}`,
        backgroundColor: theme.palette.info.main,
        "&:hover": {
          backgroundColor: shades.info["700"],
        },
      }}
    >
      <SearchIcon />
    </Button>
  );
  return (
    <Box
      sx={{
        flex: 1,
        mx: "2rem",
      }}
    >
      <TextField
        fullWidth
        label="Search"
        size="small"
        InputProps={{ endAdornment: searchButton }}
        sx={{
          "& .MuiInputBase-root": {
            paddingRight: "0px",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            borderColor: textColor.grey,
            color: textColor.grey,
          },
          "& .MuiInputBase-input .MuiOutlinedInput-root": {
            borderColor: textColor.grey,
            color: textColor.grey,
            paddingRight: "0px",
            height: "2rem",
          },
          "& .MuiOutlinedInput-root.Mui-focused": {
            fieldset: {
              borderWidth: "1px",
              borderColor: textColor.grey,
            },
          },
        }}
      />
    </Box>
  );
};

export default Search;
