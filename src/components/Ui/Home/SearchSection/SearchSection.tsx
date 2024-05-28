"use client";

import { useState } from "react";
import { Box, Button, Container, Tab, Tabs, TextField } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const SearchSection: React.FC = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab
            label="Rooms"
            value="1"
            sx={{
              "&.Mui-selected": {
                backgroundColor: "black",
                color: "white",
              },
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          />
          <Tab
            label="Flatmates"
            value="2"
            sx={{
              "&.Mui-selected": {
                backgroundColor: "black",
                color: "white",
              },
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          />
          <Tab
            label="Teamups"
            value="3"
            sx={{
              "&.Mui-selected": {
                backgroundColor: "black",
                color: "white",
              },
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          />
        </Tabs>
      </Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          p: 2,
          backgroundColor: "#f5f5f5",
          borderRadius: "12px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Start typing a suburb, city, station or uni"
          fullWidth
        />
        <Button variant="contained" color="primary" size="large">
          Search
        </Button>
      </Box>
    </Container>
  );
};

export default SearchSection;
