import Project from "./Project";

const projectData = [
  {
    image:
      "https://github.com/nbwong1/IFP-projekt-commrade/raw/main/Login-page-screenshot.png",
    title: "5-6-7-8",
    deployed: "https://still-eyrie-34699.herokuapp.com/login",
    repo: "https://github.com/nbwong1/IFP-projekt-commrade#deployed-link",
  },
  {
    image:
      "https://github.com/nbwong1/IFP-projekt-commrade/raw/main/Login-page-screenshot.png",
    title: "5-6-7-8",
    deployed: "https://still-eyrie-34699.herokuapp.com/login",
    repo: "https://github.com/nbwong1/IFP-projekt-commrade#deployed-link",
  },
  {
    image:
      "https://github.com/nbwong1/IFP-projekt-commrade/raw/main/Login-page-screenshot.png",
    title: "5-6-7-8",
    deployed: "https://still-eyrie-34699.herokuapp.com/login",
    repo: "https://github.com/nbwong1/IFP-projekt-commrade#deployed-link",
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="grid">
        {projectData.map((project) => {
          return <Project {...project} />;
        })}
      </div>
    </div>
  );
}
