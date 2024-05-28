"use client";
import { Box, Button, Container, Typography } from "@mui/material";

const HeroSection: React.FC = () => {
  //   const router = useRouter();

  const handleButtonClick = () => {
    // router.push("/post-flat");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // minHeight: "70vh",
        // backgroundImage: 'url("/images/hero-bg.jpg")',
        // backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        my: 10,
        p: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          Find Your Perfect Flat-mate Today!
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Discover the ideal living space and community.
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleButtonClick}
            sx={{ mt: 4, mr: 4 }}
          >
            Share Your Flat
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 4 }}
          >
            See More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
