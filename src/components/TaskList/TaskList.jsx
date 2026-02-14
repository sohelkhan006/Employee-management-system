import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import Failedtask from "./Failedtask";

const TaskList = ({ data }) => {
  console.log(data)
  return (
    <div
      id="tasklist"
      className="flex items-center justify-start py-3 h-[55vh] w-full gap-4 mt-10 overflow-x-auto"
    >
      {data.tasks.map((e,idx) => {
        if (e.newTask) {
          return <NewTask key={idx} data={e}/>;
        }
        if (e.active) {
          return <AcceptTask key={idx} data={e}/>;
        }
        if (e.completed) {
          return <CompleteTask key={idx} data={e}/>;
        }
        if (e.failed) {
          return <Failedtask key={idx} data={e}/>;
        }

        // switch (true) {
        //   case e.newTask:
        //     return <NewTask key={idx}/>;
        //   case e.active:
        //     return <AcceptTask key={idx}/>;
        //   case e.completed:
        //     return <CompleteTask key={idx}/>;
        //   case e.failed:
        //     return <Failedtask key={idx}/>;
        //   default:
        //     return null;
        // }
      })}
    </div>
  );
};

export default TaskList;
