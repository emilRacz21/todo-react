import { useRef } from "react";
import "./ToDo.css";

export default function ToDo({ list, page, onSelect, setTasks, tasks }) {
  const task = useRef();

  // Return if no projects are available
  if (list.length == 0) return;

  // Function to add a new task
  function handleTask() {
    if (task.current.value == "") return alert("set your task!");
    setTasks((prev) => {
      const existingTasks =
        prev[page] && prev[page].taskName ? prev[page].taskName : [];
      return {
        ...prev,
        [page]: { taskName: [...existingTasks, task.current.value] },
      };
    });
  }

  // Function to remove a task by index
  function removeEl(index) {
    setTasks((prev) => {
      const updatedTasks = prev[page].taskName.filter((_, i) => i !== index);
      return {
        ...prev,
        [page]: { taskName: updatedTasks },
      };
    });
  }

  return (
    <section>
      <div className="title">
        <div>
          <h2>{list[page].title}</h2>
          <p>Date: {list[page].dueDate}</p>
        </div>
        <div>
          <button onClick={() => onSelect(page)}>Delete Task</button>
        </div>
      </div>
      <div className="description">
        <p>{list[page].description}</p>
      </div>
      <div className="task">
        <h2>Tasks</h2>
        <div>
          <form>
            <label>input new task</label>
            <input type="text" ref={task} />
          </form>
          <button onClick={handleTask}>Add task</button>
        </div>
        <div className="added-task">
          {tasks[page]?.taskName?.map((item, index) => {
            return (
              <div key={index}>
                <h2>{item}</h2>
                <button
                  onClick={() => {
                    removeEl(index);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
