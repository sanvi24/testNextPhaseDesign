import React from "react";
import { RestartRaise, MenuBar, OpenMenu } from "../../assets";

const Header = () => {
  const navItems = [
    {
      name: "DASHBOARD",
      url: "/deshboard",
      active: true,
    },
    {
      name: "PACKAGES",
      url: "/packages",
      active: false,
    },
    {
      name: "EVENTS",
      url: "/events",
      active: false,
    },
    {
      name: "BLOGS",
      url: "/blogs",
      active: false,
    },
  ];

  return (
    <div className="flex p-4 h-38 justify-between shadow-lg">
      <div className="flex justify-between gap-4">
        <button className="sm:hidden pt-4">
          <img src={MenuBar} alt="menubar" className=" w-4 h-6" />
        </button>
        <div className="px-14 sm:px-4">
          <img
            src={RestartRaise}
            alt="RaiseStart"
            className="w-24 sm:w-32 h-12"
          />
        </div>
        <div className="sm:px-14 sm:pt-3 hidden sm:block">
          <img src={OpenMenu} alt="openMenu" className="w-10 h-8" />
        </div>
        <div className="hidden sm:hidden-none sm:flex sm:space-x-10 sm:px-6 sm:items-center sm:justify-center">
          {navItems.map((item) => (
            <div key={item.url} className="text-md font-semibold">
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-4 px-1 sm:pt-5 sm:px-0 text-center text-[6px] font-bold w-10 h-10 sm:w-14 sm:h-14 bg-yellow-300 rounded-full">
        <span>FOREVER </span>
        <span>21</span>
      </div>
    </div>
  );
};

export default Header;
