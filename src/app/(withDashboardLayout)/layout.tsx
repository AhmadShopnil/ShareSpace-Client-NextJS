import DrawerDashboard from "@/components/Dashboard/Drawer/Drawer";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <DrawerDashboard>{children} </DrawerDashboard>;
};

export default DashboardLayout;
