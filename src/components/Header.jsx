import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-desktop.png'
import './Header.css'

function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="Kasa" />
                <div>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/about">A propos</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header