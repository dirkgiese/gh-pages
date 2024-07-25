import React, {useState} from 'react'
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
                    <a href="#gpt3">What is GPT3</a>
                </li>
                <li>
                    <a href="#open_ai">Open AI</a>
                </li>
                <li>
                    <a href="#Home">Case Studies</a>
                </li>
                <li>
                    <a href="#Home">Features</a>
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
                <div className="dgi__sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                </div>
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
