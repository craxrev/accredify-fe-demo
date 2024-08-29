import React from "react";

export const RecentDocuments = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center mb-2  justify-between">
        <h4 className="font-bold  ">Recent Documents</h4>
        <h6 className=" font-bold text-accent  text-center">
          View All Documents
        </h6>
      </div>
      <div className="border-[0.5px] border-grey/50 rounded-lg px-10 py-8 w-full "></div>
    </div>
  );
};
