import Logo from "../assets/no-projects.png";
import "./Home.css";

export default function Home({ onClicked }) {
  return (
    <section className="home-section">
      <img src={Logo} alt="logo img" className="logo" />
      <h2>No project selected</h2>
      <p>Select a project or get started with a new one</p>
      <button onClick={onClicked}>Create new project</button>
    </section>
  );
}
