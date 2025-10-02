

function About() {
  return (
    <section className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>Discover my journey, skills, and passion for web development</p>

        <h3>Introduction</h3>
        <p>
          Hello! I'm <b>Japheth Kiprono</b>, a dedicated Frontend Developer with a
          passion for creating beautiful, functional, and user-centric digital experiences. 
          With expertise in modern web technologies, I specialize in building responsive 
          and accessible web applications that deliver exceptional user experiences.
        </p>

        <dl>
          <dt><strong>Mission:</strong></dt>
          <dd>To make this world out of code and tech.</dd>

          <dt><strong>Vision:</strong></dt>
          <dd>
            I envision a future where I am a successful entrepreneur, using my
            creativity and innovation to make a positive impact on society.
          </dd>
        </dl>
      </div>

      <div className="about-image">
        <img src="/Coding Coffee.jpg" alt="Coding with coffee" />
      </div>
    </section>
  );
}

export default About;
