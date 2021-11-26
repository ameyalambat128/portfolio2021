import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Projects2 from "./components/projects/Projects2";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Intro />
        <Projects />
        <Projects2 />
        <Contact />
      </div>
    </div>
  );
}

export default App;
