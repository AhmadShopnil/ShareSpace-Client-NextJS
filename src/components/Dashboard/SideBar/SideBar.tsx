import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";

import Link from "next/link";

import { useEffect, useState } from "react";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types/common";
import SidebarItems from "./SideBarItems";
import { getUserInfo } from "@/services/auth.Services";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const loggedInUser = getUserInfo() as any;
    console.log(loggedInUser);
    // const { role } = getUserInfo() as any;
    // setUserRole(role);
    setUserRole("user");
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
        >
          Share Space
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item: any, index: number) => (
          <SidebarItems key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
