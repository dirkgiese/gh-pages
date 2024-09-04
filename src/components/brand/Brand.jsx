import {react, vite, html, css, js} from './import.js'
import  './brand.css'
const Brand = () => {
    return (
        <div id="brands">
            <div className="dgi__brand section__padding">
                <div className="dgi__brand--item">
                    <img src={react} alt="react logo" width="100"/>
                </div>
                <div className="dgi__brand--item">
                    <img src={vite} alt="vite logo" width="100"/>
                </div>
                <div className="dgi__brand--item">
                    <img src={html} alt="html logo" width="100"/>
                </div>
                <div className="dgi__brand--item">
                    <img src={css} alt="css logo" width="100" className="css3"/>
                </div>
                <div className="dgi__brand--item">
                    <img src={js} alt="js logo" width="100"/>
                </div>
                <div className="dgi__brand--text">
                    <p>
                        Die Webentwicklung ist eine ziemliche Herausforderung.
                        Wenn man erst einmal angefangen hat, weiß man nie,
                        wie oft man von Technologie zu Technologie springen wird.
                    </p>
                </div>
            </div>

        </div>
    )
}
export default Brand
