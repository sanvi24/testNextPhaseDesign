import React from "react";
import { Edit, AccountImg, GoBack } from "../../assets";
import AccountDetails from "./AccountDetails";

const Main = () => {
  return (
    <div className="flex-col bg-[#f1f2f7] pt-4 pb-2">
      <div className="p-2 px-5">
        <div>
          <spa className="text-gray-400 font-semibold">Dashboard</spa> |{" "}
          <span className="text-blue-400">My Account</span>
        </div>
      </div>
      <div className="flex  space-x-4 pt-3 bg-white mx-4 py-2 h-12 px-4">
        <img src={GoBack} alt="go-back" className="w-5 h-5" />
        <div className="text-left text-md font-semibold">My Account</div>
      </div>
      <div className="m-4 mt-2 sm:p-8 bg-white">
        <div className="">
          <div className="px-6 flex w-full h-12 bg-[#f8f8f8] justify-between items-center">
            <div className="text-md font-semibold">My Profile</div>
            <img src={Edit} alt="edit" className="w-5 h-5" />
          </div>
          <div className="p-4 border-2 border-t-0 border-[#EBEDF2]">
            <div className="flex space-x-12">
              <img
                src={AccountImg}
                alt="acc-image"
                className="w-28 h-32 rounded-full"
              />
              <div className="flex-col space-y-2">
                <div className="text-xl font-semibold">Divya Chatterjee</div>
                <div className="text-xs text-gray-400">Designation</div>
                <div className="text-sm font-semibold">
                  Assistance Manager: HR
                </div>
                <div className="text-xs text-gray-400">Designation</div>
                <div className="text-sm font-semibold">XYZ company Name</div>
              </div>
            </div>

            <div className="flex-col py-4">
              <div className="text-md font-semibold text-gray-400">
                About Us
              </div>
              <div className="py-2 text-left text-sm">
                Microsoft enables digital transformation for the era of an
                intelligent cloud and an intelligent edge. Its mission is to
                empower every person and every organization on the planet to
                achieve more. Microsoft set up its India operations in 1990.
                Microsoft in India offers its global cloud services from local
                data centers to accelerate digital transformation across Indian
                start-ups, businesses, and government agencies.
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-row sm:grid-cols-12 sm:space-x-4 py-4 justify-between">
          <div className="col-span-6">
            <div className="px-4 flex w-full h-10 bg-[#f8f8f8] justify-between items-center">
              <div className="text-md font-semibold">My Account Setting</div>
              <img src={Edit} alt="edit" className="w-4 h-4" />
            </div>
            <div className="border-2 border-t-0 border-[#EBEDF2] py-2">
              <AccountDetails />
            </div>
          </div>
          <div className="col-span-6">
            <div className="px-4 flex w-full h-10 bg-[#f8f8f8] justify-between items-center">
              <div className="text-md font-semibold">Application Setting</div>
              <img src={Edit} alt="edit" className="w-4 h-4" />
            </div>
            <div className="border-2 border-t-0 border-[#EBEDF2] py-2">
              <div className="text-md text-gray-400 px-4 py-1">
                Receive job applications via
              </div>
              <div className="space-y-2 px-4 py-0">
                <div className="space-x-2">
                  <input type="radio" />
                  <label>Only on my dashboard</label>
                </div>
                <div className="space-x-2">
                  <input type="radio" />
                  <label>Email and on my dashboard</label>
                </div>
              </div>
              <div className="p-2 px-2 text-sm text-gray-400">
                *Please note, this setting will not impact your old job postings
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
