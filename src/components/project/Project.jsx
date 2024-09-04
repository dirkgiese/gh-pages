import { projects } from "../../constants/constants.js";
import "./project.css";
const Project = () => {
  console.log(projects);
  return (
      <div className="dgi__project-grid">
          <input className="toggle-checkbox" type="checkbox" id="sortItems"/>

          <label for="sortItems" className="toggle">
              <span className="toggle-name">Projekte:</span>
              <div className="toggle-switch"></div>
              <span className="toggle-label">Komfort</span>
          </label>

          {projects.map((p, i) => (
              <div className="dgi__project-card" data-category={p.projektart}>
                  <div className="dgi__project-image">
                      <a href={p.url} target="_blank" titel={p.name}>
                          <span className="dgi__project-year">{p.jahr}</span>
                          <img src={p.img} alt={p.name}/>
                      </a>
                  </div>
                  <div className="dgi__project-info">
                      <h3>{p.name}</h3>
                      {p.description}
                  </div>
                  <ul>
                      <li>
                          <a href="{p.visit}">Code</a>
                      </li>
                      <li>
                          <a href="{p.source}">soure</a>
                      </li>
                  </ul>
              </div>
          ))}
      </div>
  );
};
export default Project;
