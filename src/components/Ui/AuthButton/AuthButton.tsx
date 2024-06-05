import { getUserInfo, removeUser } from "@/services/auth.Services";
import { Box, Button, ButtonGroup } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

const AuthButton = () => {
  const userInfo: any = getUserInfo();
  const router = useRouter();

  // logout user by remove user token from local storage
  const handleLogout = () => {
    removeUser();
    router.refresh();
  };

  return (
    <Box sx={{ display: "flex" }}>
      {userInfo?.userId ? (
        <Button sx={{ marginRight: 5 }} onClick={handleLogout}>
          Logout
        </Button>
      ) : (
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
      )}
    </Box>
  );
};

export default AuthButton;
