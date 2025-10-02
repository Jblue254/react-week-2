

function Footer() {
  return (
    <footer className="footer-container">
      <h2>Let's get connected</h2>

      <div className="footer-sections">
        <div>
          <h3>About Me</h3>
          <p>
            I'm a passionate coder hoping to transform the world with coding and tech.  
            I also love hiking trails and adventures with people.  
            I love working and building solutions, but also cash, so feel free to reach out.
          </p>
        </div>

        <div>
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3>Services</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>GitHub</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <form>
            <label>Email Address:</label>
            <input type="email" placeholder="Enter your email" />

            <label>Mobile No:</label>
            <input type="tel" placeholder="+254..." />

            <label>Message:</label>
            <textarea rows="3" placeholder="Write a message"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <p className="footer-copy">
        Copyright © 2025 Nairobi . All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
