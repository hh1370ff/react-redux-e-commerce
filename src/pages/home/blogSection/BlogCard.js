import { Box, Button, Typography } from "@mui/material";
import { shades, textColor } from "../../../theme/theme";
import { hexToRgb, rgbToRgba } from "../../../utils/utils";
const BlogCard = ({ blog }) => {
  return (
    <Box
      sx={{
        padding: "10px",

        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        color: textColor.grey,
      }}
    >
      <img
        src={blog.url}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />

      <Box
        sx={{
          color: textColor.grey,
          textAlign: "center",
          backgroundImage: `linear-gradient(to bottom, ${rgbToRgba(
            hexToRgb(textColor.grey),
            0
          )} , ${rgbToRgba(hexToRgb(textColor.grey), 1)})`,

          backgroundSize: "100% 100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ pb: "1rem" }}>
          {blog.blog.title}
        </Typography>
        <Box
          sx={{
            height: "100px",
            overflow: "hidden",
            paddingX: "1rem",
          }}
        >
          <Typography variant="body2">{blog.blog.description}</Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          fontWeight: 500,
          color: shades.primary["500"],
          backgroundColor: shades.secondary["500"],
          "&:hover": {
            backgroundColor: shades.secondary["700"],
            color: shades.secondary["500"],
          },
        }}
      >
        Read More
      </Button>
    </Box>
  );
};

export default BlogCard;
