import React from "react";
import Main from "./Main";
import SideBar from "./SideBar";

const Layout = () => {
  return <div className="flex">
    <div className="hidden sm:block">
    <SideBar />
    </div>
    <Main />
  </div>;
};

export default Layout;
