"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

// const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];
const heights = [270, 160, 140, 230, 140, 130];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const PhotoGallery = () => {
  return (
    <Box sx={{ minHeight: 253 }}>
      <Masonry columns={{ xs: 3, sm: 3 }} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
};
