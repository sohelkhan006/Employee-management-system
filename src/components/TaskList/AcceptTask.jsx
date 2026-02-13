import React from "react";

const AcceptTask = () => {
  return (
    <div className="shrink-0 h-full w-[350px] p-4 bg-yellow-500 rounded-xl">
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
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm rounded">Mark as completed</button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded">Mark as failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
