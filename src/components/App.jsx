import { useState } from "react";
import ListProjects from "./ListProjects";
import Home from "./Home";
import EditProject from "./EditProject";
import "./App.css";
import ToDo from "./ToDo";

export default function App() {
  // State to control displayed page
  const [page, setPage] = useState(null);
  // Toggle state for editing mode
  const [toggle, setToggle] = useState(false);
  // State to store tasks
  const [tasks, setTasks] = useState({});
  // State to store projects
  const [addProject, setAddProject] = useState([]);

  // Toggle edit mode
  function handleEdit() {
    setToggle((value) => !value);
  }

  // Add new project to the list
  function pushProject(title, description, dueDate) {
    setAddProject((prev) => [...prev, { title, description, dueDate }]);
  }

  // Set the page based on the selected element
  function handleCreateElements(event) {
    setPage(event.target.id);
  }

  // Set page to default view
  function setDefaultPage() {
    setPage(undefined);
  }

  // Remove a project by index
  function removeEl(index) {
    setAddProject((prev) => {
      const updatedProjects = prev.filter((_, i) => i !== Number(index));
      setDefaultPage();
      return updatedProjects;
    });
  }

  return (
    <>
      <main className="app-main">
        <ListProjects
          onAdd={setDefaultPage}
          onClicked={handleEdit}
          list={addProject}
          onSelect={handleCreateElements}
        />
        {page != undefined ? (
          <ToDo
            list={addProject}
            page={page}
            onSelect={removeEl}
            setTasks={setTasks}
            tasks={tasks}
          />
        ) : !toggle ? (
          <Home onClicked={handleEdit} />
        ) : (
          <EditProject onSet={pushProject} onClicked={handleEdit} />
        )}
      </main>
    </>
  );
}
