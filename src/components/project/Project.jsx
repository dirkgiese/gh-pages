import { projects } from "../../constants/constants.js";
import { CiLink } from "react-icons/ci";
import "./project.css";
const Project = () => {
  //console.log(projects);
  return (
      <div className="dgi__project-grid">
          <input className="toggle-checkbox" type="checkbox" id="sortItems"/>

          <label htmlFor="sortItems" className="toggle">
              <span className="toggle-name">Projekte:</span>
              <div className="toggle-switch"></div>
              <span className="toggle-label"> nur Komfort anzeigen</span>
          </label>

          {projects.map((p, i) => (
              <div className="dgi__project-card" data-category={p.projektart} key={i}>
                  <div className="dgi__project-image">
                      <a href={p.url} target="_blank" titel={p.name}>
                          <img src={p.img} alt={p.name}/>
                      </a>
                  </div>
                  <div className="dgi__project-info">
                      <span className="dgi__project-year">{p.jahr}</span>
                      <h3>{p.name}</h3>
                      <a href={p.url} target="_blank" rel="noopener noreferrer"
                         className="dgi__project-link">
                          <CiLink color="white" size="1em"/>{p.url}
                      </a>
                      <p>
                          Projektart: {p.projektart}, online seit: <span>{p.online}</span>
                      </p>

                  </div>

              </div>
          ))}
      </div>
  );
};
export default Project;
