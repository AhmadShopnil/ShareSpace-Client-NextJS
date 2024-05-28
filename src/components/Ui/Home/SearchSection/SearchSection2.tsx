"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Container, TextField } from "@mui/material";

const SearchSection2 = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
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
          </TabList>
        </Box>
        <TabPanel value="1">Search for Rooms content...</TabPanel>
        <TabPanel value="2">Search for Flatmates content...</TabPanel>
        <TabPanel value="3">Search for Teamups content...</TabPanel>
      </TabContext>
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

export default SearchSection2;
