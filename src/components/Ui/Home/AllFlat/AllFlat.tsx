import FlatCard from "@/components/Shared/FlatCard/FlatCard";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const AllFlat = async () => {
  const res = await fetch("http://localhost:3000/api/flats");
  const data = await res.json();

  const flats = data?.result?.data;

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
        {flats?.map((flat: any, index: number) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <FlatCard flat={flat}></FlatCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllFlat;
