

function Contact() {
  return (
    <section className="contact-container">
      <div className="contact-image">
        <img src="/Telephone.jpg" alt="Phone illustration" />
      </div>

      <div className="contact-card">
        <h1>My Contact</h1>
        <p>Please feel free to reach out:</p>

        <div className="contact-info">
          <p>
            <img src="/phone image.jpg" alt="call" />
            <a href="tel:+254783125678">+254 783 125 678</a>
          </p>

          <p>
            <img src="/Instagram.jpeg" alt="Instagram" />
            <a 
              href="https://www.instagram.com/j_blue5255?igsh=MXI2aGsyMDR6dXY4aw==" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              @Jblue5255
            </a>
          </p>

          <p>
            <img src="/Gmail.jpg" alt="Gmail" />
            <a href="mailto:yourname@gmail.com">yourname@gmail.com</a>
          </p>

          <p>
            <img src="/Location.png" alt="Location" />
            <a 
              href="https://maps.app.goo.gl/eKCwq5MhmvaprBMZ8" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Nairobi, Kenya
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
