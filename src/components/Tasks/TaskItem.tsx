import React, { useState } from "react";

const TaskItem = ({
  name,
  done,
  id,
  toggleDone,
  deleteTask,
}: {
  name: string;
  done: boolean;
  id: string;
  toggleDone: (id: string, done: boolean) => void;
  deleteTask: (id: string) => void;
}) => {
  return (
    <div className="flex justify-between bg-white p-1 px-3 rounded-sm">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={done}
          onChange={() => toggleDone(id, !done)}
        />
        {name}
      </div>
      <button
        className="bg-green-200 hover:bg-green-300 rounded-lg p-1 px-3"
        onClick={() => deleteTask(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
