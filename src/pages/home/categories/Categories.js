import { categoriesInfo } from "./imageInfos";
import { Box, Typography } from "@mui/material";
import { shades, textColor } from "../../../theme/theme";

const Categories = () => {
  const categoriesName = Object.keys(categoriesInfo);

  const content = (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: shades.primary[700],
        alignItems: "center",
        height: "250px",
      }}
    >
      {categoriesName.map((name, index) => {
        return (
          <Box>
            <Box sx={{ width: "200px", height: "150px" }}>
              <img
                src={categoriesInfo[name]}
                alt={name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                color: shades.secondary["500"],
                fontWeight: 600,
                mt: "0.5rem",
              }}
            >
              {name}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );

  return content;
};

export default Categories;
