import {useState} from 'react'
import './navbar.css'
import logo from '../../assets/dg.svg'
import { RiMenu3Line , RiCloseLine} from "react-icons/ri";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const Menu = ()=> {
        return <>
            <ul>
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#brands">Technologie</a>
                </li>
                <li>
                    <a href="#projects">Projekte</a>
                </li>
                <li>
                    <a href="#footer">Kontakt</a>
                </li>
            </ul>
        </>
    }

    return (
        <div className="dgi__navbar">
            <div className="dgi__navbar--container">
                <div className="dgi__navbar--logo">
                    <img src={logo} alt="Mein Logo" width="50"/>
                </div>

                <nav className="dgi__links">
                   <Menu />
                </nav>
            </div>
            <div className="dgi__menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size="25" onClick={() => setToggleMenu(!toggleMenu)}/>
                    : <RiMenu3Line color="#fff" size="25" onClick={() => setToggleMenu(!toggleMenu)} />
                }

                { toggleMenu && (
                    <div className="dgi__menu--mobile scale-up-center">
                        <Menu />
                    </div>
                )}

            </div>
        </div>
    )
}
export default Navbar
