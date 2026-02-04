import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form className="flex  w-full flex-wrap items-start justify-between ">
        <div className="w-1/2   ">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task title</h3>
            <input
              className="text-sm px-2 py-1  w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm px-2 py-1  w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="date"
              name=""
              id=""
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              className="text-sm px-2 py-1  w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              name=""
              id=""
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm px-2 py-1  w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              name=""
              id=""
              placeholder="Design, Dev etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start  ">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded bg-transparent outline-none border border-gray-400"
            name=""
            id=""
            placeholder="Detailed description of the task"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
