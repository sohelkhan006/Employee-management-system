import React from "react";

const Failedtask = ({ data }) => {
  return (
    <div className="shrink-0 h-full w-[350px] p-4 bg-cyan-300 rounded-xl">
      <div className="flex items-center justify-between">
        <h2 className="bg-red-400 px-4 py-2 text-sm font-semibold rounded-xl">
          {data.category}
        </h2>
        <h3 className="px-4 py-2 text-sm font-semibold">{data.date}</h3>
      </div>
      <h2 className="mt-5 font-semibold text-2xl">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="mt-4">
        <button className="w-full">Failed</button>
      </div>
    </div>
  );
};

export default Failedtask;
