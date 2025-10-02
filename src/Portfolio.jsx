import ProjectCard from "./ProjectCard"; 

function Portfolio() {
  return (
    <section className="portfolio-container">
      <h1>My Projects</h1>

      <div className="portfolio-grid">
        <ProjectCard
          img="/Facebook.jpeg"
          title="Facebook"
          description="Facebook is a social networking service that allows users to connect with friends, family, and colleagues online. It provides a platform for sharing information, photos, videos, and updates, as well as engaging with others through messages, comments, and reactions."
        />

        <ProjectCard
          img="\Boring company.jpeg"
          title="Boring Company"
          description="The Boring Company is an infrastructure and tunnel construction company focused on creating safe, fast-to-dig, and low-cost transportation, utility, and freight tunnels to alleviate traffic congestion in urban areas."
        />

        <ProjectCard
          img="\Nokia.jpeg"
          title="Nokia Telecommunication"
          description="Nokia is a Finnish multinational telecommunications and IT company. Once known for mobile phones, it now focuses on network infrastructure, including mobile, fixed, and cloud networks, as well as long-term research and IP work."
        />
      </div>
    </section>
  );
}

export default Portfolio;
