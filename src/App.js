import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import "./style.css";

function App() {
  const [page, setPage] = useState("About Me");
  return (
    <div>
      <Navigation currentPage={page} onChange={setPage} />
      {page === "About Me" && <AboutMe />}
      {page === "Contact" && <Contact />}
      {page === "Portfolio" && <Portfolio />}
      {page === "Resume" && <Resume />}
    </div>
  );
}

export default App;
