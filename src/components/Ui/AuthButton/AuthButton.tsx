import { Box, Button, ButtonGroup } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

const AuthButton = () => {
  const router = useRouter();
  const handleLogout = () => {
    console.log("loging out...");
    router.refresh();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Button onClick={handleLogout}>Logout</Button>
      <Box>
        <ButtonGroup
          variant="text"
          color="secondary"
          aria-label="Basic button group"
        >
          <Button component={Link} href="/login">
            Login
          </Button>
          <Button component={Link} href="/register">
            SignUp
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default AuthButton;
