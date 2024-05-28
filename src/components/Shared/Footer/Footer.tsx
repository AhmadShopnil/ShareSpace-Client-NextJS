import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We are a platform connecting people looking for flat shares. Our
              mission is to help you find the perfect place to live with the
              best roommates.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Quick Links
            </Typography>
            <ul>
              <li>
                <Link href="#" variant="body2" color="textSecondary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2" color="textSecondary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2" color="textSecondary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2" color="textSecondary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: contact@flatshare.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: (123) 456-7890
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Follow Us
            </Typography>
            <IconButton color="inherit" href="https://facebook.com">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com">
              <Instagram />
            </IconButton>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} FlatShare. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
