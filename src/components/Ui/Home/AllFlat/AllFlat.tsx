import FlatCard from "@/components/Shared/FlatCard/FlatCard";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const AllFlat = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 20 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Explore All Flat
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Box
          sx={{
            height: 4,
            width: "50%",
            backgroundColor: "grey",
            mb: 1,
          }}
        />
      </Box>
      <Grid container spacing={4}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <FlatCard></FlatCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllFlat;
