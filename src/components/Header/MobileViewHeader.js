import React from "react";
import { SideBarNameAndIcon } from "../../Constant";

const MobileViewHeader = () => {
  const getSideBarName = SideBarNameAndIcon.slice(3, 7);
  return (
    <div className="sm:hidden flex text-[10px] space-x-2 items-center justify-between text-gray-400 font-semibold p-2 px-4 h-10">
      {getSideBarName.map((item, index) => (
        <div key={item.url} className="flex space-x-4">
          <span>{item.name}</span>

          {index !== getSideBarName.length - 1 && (
            <span className="border-r-2"></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileViewHeader;
