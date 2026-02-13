import React from "react";

const Failedtask = () => {
  return (
    <div className="shrink-0 h-full w-[350px] p-4 bg-cyan-300 rounded-xl">
      <div className="flex items-center justify-between">
        <h2 className="bg-red-400 px-4 py-2 text-sm font-semibold rounded-xl">
          High
        </h2>
        <h3 className="px-4 py-2 text-sm font-semibold">03 feb 2026</h3>
      </div>
      <h2 className="mt-5 font-semibold text-2xl">Make a project</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui totam
        doloribus exercitationem possimus velit voluptatem.
      </p>
      <div className="mt-4">
        <button className="w-full">Failed</button>
      </div>
    </div>
  );
};

export default Failedtask;
