import {projects}  from "../../constants/constants.js";
import './project.css'
const Project = () => {

    return (
        <div className="dgi__project-grid">
            {projects.map((p,i) => (
                <div key={p.id}>
                    <h3>{p.title}</h3>
                    <img src={p.image}/>
                    <div className="card-info">
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
    )
}
export default Project;