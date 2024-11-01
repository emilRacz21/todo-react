import { useRef } from "react";
import "./EditProject.css";

export default function EditProject({ onClicked, onSet }) {
  // Refs to capture form inputs
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  // Function to validate and send form data
  function send() {
    if (title.current.value === "") {
      alert("set title!");
    } else {
      onClicked(); // Close the edit form
      onSet(
        title.current.value,
        description.current.value,
        dueDate.current.value
      ); // Send data back to parent
    }
  }

  return (
    <section className="section-container">
      <div className="form-container">
        <div className="button-group">
          <button onClick={onClicked} className="cancel-button">
            Cancel
          </button>
          <button className="save-button" onClick={send}>
            Save
          </button>
        </div>
        <form className="form">
          <label>Title</label>
          <input ref={title} type="text" className="input" />
          <label>Description</label>
          <input ref={description} type="text" className="input" />
          <label>Due date</label>
          <input ref={dueDate} type="date" className="input" />
        </form>
      </div>
    </section>
  );
}
