import './header.css';
import ai from '../../assets/ai2.webp';

const Header = () => {
    return (
        <div className="dgi__header section__padding" id="home">
            <div className="dgi__header-content">
                <h1 className="gradient__text">Kreativer Code &amp; digitale Spielwiesen</h1>
                <p>
                    Ich liebe es, Webseiten und Webanwendungen zu entwickeln, die mehr sind als nur statischer Inhalt. 
                    Für mich ist Frontend-Entwicklung eine ständige Entdeckungsreise – sei es beim Experimentieren mit neuen Frameworks, dem Ausloten von 3D-Webdesign mit Three.js oder dem Bauen kleiner, nützlicher Tools für meine Hobbys wie Arnis.
                </p>
                <p>
                   Schaut euch gerne eines meiner aktuellen Experimente an::<br/><br/>
                    <a href="https://fca.dirkgiese.info/" target="_blank" style={{ color:'#ff8a71'}}>fca.dirkgiese.info</a>
                </p>
            </div>
            <div className="dgi__header-image">
                <img src={ai} width="640" height="646" alt="Gesicht mit AI generiert" />
            </div>
        </div>
    )
}
export default Header
