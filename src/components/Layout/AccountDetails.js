import React from "react";

const AccountDetails = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mx-4">
      <div className="row-span-3">
        <label className="text-gray-400">Full Name</label>
        <input
          type="text"
          value="Divya Chatterjee"
          className="w-full h-8 text-start rounded-xl"
        />
      </div>
      <div className="row-span-3">
        <label className="text-gray-400">Designation</label>
        <input
          type="text"
          value="Assistance Manager - HR"
          className="w-full h-8 text-start rounded-xl"
        />
      </div>
      <div className="row-span-3">
        <label className="text-gray-400">Phone/Landline</label>
        <input
          type="text"
          value="9807564321"
          className="w-full h-8 text-start rounded-xl"
        />
      </div>
      <div>
        <a className="text-sm text-blue-500 font-semibold">Change Password</a>
      </div>

    </div>
  );
};

export default AccountDetails;
