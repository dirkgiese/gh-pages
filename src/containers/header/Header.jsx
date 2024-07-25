import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="dgi__header section__padding" id="home">
            <div className="dgi__header-content">
                <h1 className="gradient__text">Web&shy;design in Aktion </h1>
                <h2>Einige Projekte eines erfahrenen Frontend
                    Entwicklers</h2>
                <p>
                    Ich bin ein Webentwickler aus Leidenschaft und habe mich auf die Entwicklung von Webseiten und
                    Webanwendungen spezialisiert. Ich bin ein kreativer Kopf und liebe es, neue Ideen zu entwickeln und
                    diese in die Tat umzusetzen.
                </p>
            </div>
            <div className="dgi__header-image">
                <img src={ai}/>
            </div>
        </div>
    )
}
export default Header