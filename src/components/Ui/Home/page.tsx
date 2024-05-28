import React from "react";
import HeroSection from "./HeroSection/HeroSection";

import AllFlat from "./AllFlat/AllFlat";
import { Container } from "@mui/material";
import SearchSection from "./SearchSection/SearchSection";

const HomePage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <HeroSection></HeroSection>
      <SearchSection></SearchSection>
      <AllFlat></AllFlat>
    </Container>
  );
};

export default HomePage;
