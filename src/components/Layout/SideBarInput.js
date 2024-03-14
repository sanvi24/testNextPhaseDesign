import React from "react";

const SideBarInput = ({ image, name }) => {
  return (
    <div className="p-4 flex space-x-6 gap-4 hover:bg-[#313136]">
      <div>
        <img src={image} alt="dashboard" />
      </div>
      <div className="text-right text-sm text-white font-semibold hover:text-[#99CA3B]">
        {name}
      </div>
    </div>
  );
};

export default SideBarInput;
