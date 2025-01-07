import GH from "../assets/gh.png";
import LI from "../assets/linkedin.png";
import phone from "../assets/phone.png";


function ContactMe() {
  return (
    <div className="contact-section" id="contact">
      <div className="container text-center">
        <div className="content">
          <h1 className="fw-bold">Contact Me</h1>
          <p>My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you asap!</p>
        </div>
        <div className="social">
          <div className="mail">
            <a className="special-btn" href="mailto:ahmedelbalouty01@gmail.com">Mail Me</a>
          </div>
          <div className="icons">
            <a href="https://github.com/Ahmed-Elbalouty" target="_blank" >
              <img src={GH} alt="Github" style={{ width: "40px", height: "40px" }} />
            </a>
            <a href="tel:+201062530934" target="_blank" >
              <img src={phone} alt="Phone" style={{ width: "40px", height: "40px" }} />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-elbalouty-653b452a5/" target="_blank" >
              <img src={LI} alt="LinkedIn" style={{ width: "40px", height: "40px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
