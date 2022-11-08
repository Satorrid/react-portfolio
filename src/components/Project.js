export default function Project({ image, title, deployed, repo }) {
  return (
    <div className="card">
      <img src={image} />
      <div>{title}</div>
      <div>
        <a href={deployed}>Deployed Link</a>
      </div>
      <div>
        <a href={repo}>Repo Link</a>
      </div>
    </div>
  );
}
