import HT from "../assets/html5.svg";
import CS from "../assets/css3.svg";
import JS from "../assets/javascript-1.svg";
import JQ from "../assets/jquery-4.svg";
import NXT from "../assets/next-js.svg";
import RCT from "../assets/react.svg";
import TW from "../assets/tailwind-css-2.svg";
import BT from "../assets/bootstrap-5-1.svg";
import GT from "../assets/git-icon.svg";
import GH from "../assets/gh.png";

function AboutSection() {
  return (
    <div className="about-section" id="about">
      <h1 className="text-center fw-bold">More About Me</h1>
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-md-6">
            <h2 className="title fw-bold mb-3">My Education</h2>
            <div className="section">
              <span className="name">Bachelor&apos;s Degree in <span className="description">Computer Science</span></span>
            </div>
            <div className="section">
              <span className="description">Faculty of Computers and Information Sciences</span>
            </div>
            <div className="section">
              <span className="name">Grade <span className="description">Very Good</span></span>
            </div>
            <div className="section">
              <span className="name">University <span className="description">Mansoura</span></span>
            </div>
            <div className="section">
              <span className="name">Date <span className="description">2019 - 2023</span></span>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5 mt-md-0">
            <h2 className="title fw-bold mb-3">My Skills</h2>
            <div className="section">
              <div className="desc fw-bold">Here are a few technologies I&apos;ve been working with recently:</div>
              <ul className="mt-2 pl-0">
                <div className="row">
                  <div className="col-6">
                    <li>
                      <img src={HT} style={{ width: "20px", height: "20px" }} alt="HTML5" />
                      <span className="px-2">HTML5</span>
                    </li>
                    <li>
                      <img src={CS} style={{ width: "20px", height: "20px" }} alt="CSS3" />
                      <span className="px-2">CSS3</span>
                    </li>
                    <li>
                      <img src={JS} style={{ width: "20px", height: "20px" }} alt="JS" />
                      <span className="px-2">JS</span>
                    </li>
                    <li>
                      <img src={JQ} style={{ width: "20px", height: "20px" }} alt="JQuery" />
                      <span className="px-2">JQuery</span>
                    </li>
                    <li>
                      <img src={BT} style={{ width: "20px", height: "20px" }} alt="Bootstrap" />
                      <span className="px-2">Bootstrap</span>
                    </li>
                  </div>
                  <div className="col-6">
                    <li>
                      <img src={RCT} style={{ width: "20px", height: "20px" }} alt="React.js" />
                      <span className="px-2">React.js</span>
                    </li>
                    <li>
                      <img src={NXT} style={{ width: "20px", height: "20px" }} alt="Next.js" />
                      <span className="px-2">Next.js</span>
                    </li>
                    <li>
                      <img src={TW} style={{ width: "20px", height: "20px" }} alt="Tailwind" />
                      <span className="px-2">Tailwind</span>
                    </li>
                    <li>
                      <img src={GT} style={{ width: "20px", height: "20px" }} alt="Git" />
                      <span className="px-2">Git</span>
                    </li>
                    <li>
                      <img src={GH} style={{ width: "20px", height: "20px" }} alt="Github" />
                      <span className="px-2">Github</span>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
