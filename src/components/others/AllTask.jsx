import { useContext } from "react";
import { authContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authdata = useContext(authContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded  ">
      <div className="bg-green-500 mb-2 flex justify-between py-2 px-4 rounded">
        <h2 className=" text-lg font-medium w-1/5 ">Employee Name</h2>
        <h5 className=" text-lg font-medium w-1/5 ">New task</h5>
        <h5 className=" text-lg font-medium w-1/5 ">Active task</h5>
        <h5 className=" text-lg font-medium w-1/5 ">completed</h5>
        <h5 className=" text-lg font-medium w-1/5 ">Failed</h5>
      </div>

      <div className="">
        {authdata.employees.map((e) => {
          return (
            <div
              key={e.id}
              className="bg-transparent mb-2 flex justify-between py-2 px-4 rounded border-2 border-emerald-400"
            >
              <h2 className=" text-lg font-medium w-1/5 text-white ">
                {e.firstName}
              </h2>
              <h3 className=" text-lg font-medium w-1/5 text-blue-400">
                {e.taskCounts.newTask}
              </h3>
              <h5 className=" text-lg font-medium w-1/5 text-yellow-400">
                {e.taskCounts.active}
              </h5>
              <h5 className=" text-lg font-medium w-1/5 text-green-500">
                {e.taskCounts.completed}
              </h5>
              <h5 className=" text-lg font-medium w-1/5 text-red-600">
                {e.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
