import { styled, TextField, Typography } from "@mui/material";
import { textColor } from "../../theme/theme";

export const FooterTitle = styled(Typography)(() => ({
  color: textColor.grey,
  textTransform: "uppercase",
}));

export const SubscribeTf = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    paddingRight: "0px",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    borderColor: textColor.grey,
    color: textColor.grey,
  },
  "& .MuiInput-underline:after": {
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
}));
