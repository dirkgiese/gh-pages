import {Project}  from "../../components";
import './projects.css';
const Projects = () => {
    
    return (
        <div className="dgi__projects section__padding" id="projects">
            <div className="dgi__projects-heading">
                <h2 className="dgi__projects-header gradient__text ">
                    kleiner Auszug an Projekten:
                </h2>
                <p>
                    Ich erstelle maßgeschneiderte Webseiten für 4- und 5-Sterne-Hotels,
                    die auf Basis von professionellen Designs in XD oder Figma umgesetzt werden.
                    Mein Fokus liegt auf einer optimalen Benutzererfahrung und einer nahtlosen Integration in das
                    firmeneigene CMS. Hierfür verwende ich HTLM, CSS (Less), JavaScript, XML und XSL.
                </p>
            </div>
            <Project/>
        </div>
    )
}
export default Projects
