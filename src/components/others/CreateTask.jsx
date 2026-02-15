import { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAssign, setTaskAssign] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [newTask, setNewTask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDate,
      taskCategory,
      taskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = JSON.parse(localStorage.getItem('employees'));

    data.forEach(function(elem){
      if (taskAssign === elem.firstName) {
        elem.tasks.push(newTask);
        console.log(elem);
      }
    });

    setTaskTitle("");
    setTaskDate("");
    setTaskAssign("");
    setTaskCategory("");
    setTaskDescription(""); 
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex  w-full flex-wrap items-start justify-between "
      >
        <div className="w-1/2   ">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task title</h3>
            <input
              className="text-sm px-2 py-1  w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4 text-white"
              type="text"
              placeholder="Make a UI design"
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm px-2 py-1  w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4 text-white "
              type="date"
              name=""
              id=""
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              className="text-sm px-2 py-1  w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4 text-white"
              type="text"
              name=""
              id=""
              placeholder="Employee name"
              value={taskAssign}
              onChange={(e) => {
                setTaskAssign(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm px-2 py-1  w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4 text-white"
              type="text"
              name=""
              id=""
              placeholder="Design, Dev etc"
              value={taskCategory}
              onChange={(e) => {
                setTaskCategory(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start  ">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded bg-transparent outline-none border border-gray-400 text-white"
            name=""
            id=""
            placeholder="Detailed description of the task"
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
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
