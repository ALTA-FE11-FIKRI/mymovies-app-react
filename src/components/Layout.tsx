import React, { FC } from "react";

import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container flex flex-col bg-white dark:bg-black overflow-auto">
        <Navbar />
        <div className="h-full overflow-auto p-3">{children}</div>
      </div>
  );
};

export default Layout;