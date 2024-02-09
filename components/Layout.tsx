import React from "react";

import FollowBar from "@/components/layout/FollowBar";
import Sidebar from "@/components/layout/Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl mt-5">
        <div className="grid grid-cols-4 h-full justify-center">
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-100">
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
