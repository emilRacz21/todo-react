import "./ListProjects.css";

export default function ListProjects({ onClicked, list, onSelect, onAdd }) {
  return (
    <section className="list-projects-section">
      <h1>Your Projects</h1>
      <ul className="project-list">
        {list.map((items, index) => {
          return (
            <li
              onClick={onSelect}
              id={index}
              key={index}
              className="project-item"
            >
              {items.title}
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          onClicked();
          onAdd();
        }}
        className="add-button"
      >
        Add project
      </button>
    </section>
  );
}
