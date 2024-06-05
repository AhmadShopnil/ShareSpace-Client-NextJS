"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import SideBar from "../SideBar/SideBar";
import { Badge, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useState } from "react";
import { useGetMyProfileQuery } from "@/redux/api/profileApi";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";

const drawerWidth = 240;

export default function DrawerDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const { data: profile, isLoading } = useGetMyProfileQuery({});

  // const { data } = useGetAllFlatsQuery({});
  // console.log("fetching my flats:", data);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#F4F7FE",
          boxShadow: 0,
          borderBottom: "1px solid #ddd",
          py: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "primary.main" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{ color: "rgba(11, 17, 52, 0.6)" }}
              >
                Hi, {isLoading ? "Loading..." : profile?.name},
              </Typography>
            </Box>
            <Stack direction="row" gap={3}>
              <Badge badgeContent={1} color="primary">
                <IconButton sx={{ background: "#ffffff" }}>
                  <NotificationsNoneIcon color="action" />
                </IconButton>
              </Badge>
              {/* <Avatar alt={data?.name} src={data?.profilePhoto} /> */}
              {/* <AccountMenu /> */}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <SideBar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <SideBar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
