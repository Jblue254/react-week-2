
function ProjectCard({ img, title, description }) {
  return (
    <div className="project-card">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
