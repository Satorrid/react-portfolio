export default function Navigation({ onChange, currentPage }) {
  return (
    <nav>
      <div
        style={{ backgroundColor: currentPage === "About Me" ? "yellow" : "" }}
        onClick={() => onChange("About Me")}
      >
        About Me
      </div>
      <div
        style={{ backgroundColor: currentPage === "Portfolio" ? "yellow" : "" }}
        onClick={() => onChange("Portfolio")}
      >
        Portfolio
      </div>
      <div
        style={{ backgroundColor: currentPage === "Contact" ? "yellow" : "" }}
        onClick={() => onChange("Contact")}
      >
        Contact
      </div>
      <div
        style={{ backgroundColor: currentPage === "Resume" ? "yellow" : "" }}
        onClick={() => onChange("Resume")}
      >
        Resume
      </div>
    </nav>
  );
}
