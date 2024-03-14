import React from "react";
import {
  Collaboration,
  Profile,
  Dashboard,
  Jobs,
  EnterPrise,
  Followers,
  Conversion,
  HPLogo,
} from "../../assets";
import SideBarInput from "./SideBarInput";

const SideBar = () => {
  const SideBarNameAndIcon = [
    {
      img: Dashboard,
      name: "Dashboard",
    },
    {
      img: Jobs,
      name: "Jobs",
    },
    {
      img: Profile,
      name: "Applications",
    },
    {
      img: Followers,
      name: "Followers",
    },
    {
      img: EnterPrise,
      name: "Company Profile",
    },
    {
      img: Collaboration,
      name: "All Users",
    },
    {
      img: Conversion,
      name: "My Account",
    },
  ];
  return (
    <div className="flex flex-col bg-[#404040] w-72 h-full justify-between">
      <div>
        <div className="flex p-4 py-6">
          <img src={HPLogo} alt="hp-logo" className="w-[48px] h-[48px]" />
          <div className="flex-col px-4">
            <div className="text-white text-[40px]">Hello,</div>
            <div className="text-[22px] text-white">Hewlet Packard...</div>
          </div>
        </div>
        <div>
          {SideBarNameAndIcon.map((item) => (
            <SideBarInput image={item.img} name={item.name} />
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-[#99CA3B]">Contact Us</div>
        <div className="pt-2 text-xs text-[#99CA3B]">
          Email: admin@Jobsforher.com
        </div>
      </div>
    </div>
  );
};

export default SideBar;
