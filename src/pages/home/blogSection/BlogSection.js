import { Box, Typography } from "@mui/material";
import React from "react";
import BlogCard from "./BlogCard";
import { blogInfo } from "./blgoInfo";
import { shades, textColor } from "../../../theme/theme";
const BlogSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: textColor.grey,
        gap: "1rem",
        backgroundColor: shades.primary["700"],
        padding: "1rem 4rem 4rem 4rem",
      }}
    >
      <Typography variant="h3" sx={{ ml: "0.5rem" }}>
        Our Latest News
      </Typography>
      <Box sx={{ display: "flex" }}>
        {blogInfo.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </Box>
    </Box>
  );
};

export default BlogSection;
