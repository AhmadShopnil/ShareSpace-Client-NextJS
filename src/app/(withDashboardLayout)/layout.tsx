import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{children}</h1>
    </div>
  );
};

export default DashboardLayout;
