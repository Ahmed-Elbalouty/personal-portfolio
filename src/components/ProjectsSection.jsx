import GH from "../assets/gh.png";
import DEMO from "../assets/img-icons8.png";
import data from "../data/projectsData";

function ProjectsSection() {
  return (
    <div className="projects-section" id="projects">
      <h1 className="text-center fw-bold">My Latest Projects</h1>
      <div className="container">
        <div className="pt-5 row">
          {
            data.map((project) => {
              return (
                <div className="my-3 col-12 col-md-6 col-lg-4 col-xxl-3" key={project.id}>
                  <div className="p-2 card">
                    <img src={project.image} className="card-img-top" style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                      alt={project.name} />
                    <div className="card-body">
                      <h5 className="card-title">{project.name}</h5>
                      <p className="card-text" title={project.desc} >{project.desc}</p>
                      {
                        project.github.found == true ? <div className="links">
                          <a href={project.github.url} target="_blank" className="card-btn">
                            <img src={GH} alt="GitHub-Icon" style={{ width: "20px" }} />
                            <span className="ms-2">GitHub</span>
                          </a>
                          <a href={project.liveDemo} target="_blank" className="card-btn">
                            <img src={DEMO} alt="Link-Icon" style={{ width: "20px" }} />
                            <span className="ms-2">Live Demo</span>
                          </a>
                        </div>
                          :
                          <a href={project.liveDemo} target="_blank" className="card-btn">
                            <img src={DEMO} alt="Link-Icon" style={{ width: "20px" }} />
                            <span className="ms-2">Live Demo</span>
                          </a>
                      }
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div >
  );
}

export default ProjectsSection;
