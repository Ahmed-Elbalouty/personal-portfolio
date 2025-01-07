import GH from "../assets/gh.png";
import LI from "../assets/linkedin.png";
import phone from "../assets/phone.png";
import arrow from "../assets/arrow.png";
import mobile from "../assets/mobile.png";
import mail from "../assets/mail.png";
import location from "../assets/location.png";

function FooterSection() {
  const handleLinkClick = (link) => {
    if (link === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (window.location.hash) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    }
  };

  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h1>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/');
                }}
              >
                &lt; A-Abdelsalam /&gt;
              </a>
            </h1>
            <div className="social">
              <a href="https://github.com/Ahmed-Elbalouty" target="_blank">
                <img src={GH} alt="Github" style={{ width: "30px", height: "30px" }} />
              </a>
              <a href="tel:+301062530934" target="_blank">
                <img src={phone} alt="Phone" style={{ width: "30px", height: "30px" }} />
              </a>
              <a href="https://www.linkedin.com/in/ahmed-elbalouty-653b452a5/" target="_blank">
                <img src={LI} alt="LinkedIn" style={{ width: "30px", height: "30px" }} />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-3 ul-parent mt-5 mt-md-0 pt-2 pt-md-0">
            <ul className="first">
              <li>
                <img src={arrow} style={{ width: "15px", height: "15px" }} alt="Arrow" />
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('/');
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <img src={arrow} style={{ width: "15px", height: "15px" }} alt="Arrow" />
                <a href="#about">About</a>
              </li>
              <li>
                <img src={arrow} style={{ width: "15px", height: "15px" }} alt="Arrow" />
                <a href="#projects">Projects</a>
              </li>
              <li>
                <img src={arrow} style={{ width: "15px", height: "15px" }} alt="Arrow" />
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-5 ul-parent mt-5 mt-md-0 pt-2 pt-md-0">
            <ul className="second">
              <li>
                <img src={location} style={{ width: "20px", height: "20px" }} alt="Location-Icon" />
                <span>Mansoura, Egypt</span>
              </li>
              <li>
                <img src={mail} style={{ width: "20px", height: "20px" }} alt="Mail-Icon" />
                <a href="mailto:ahmedelbalouty01@gmail.com">ahmedelbalouty01@gmail.com</a>
              </li>
              <li>
                <img src={mobile} style={{ width: "20px", height: "20px" }} alt="Mobile-Icon" />
                <a href="tel:+20 1062530934">+20 1062530934</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterSection;
