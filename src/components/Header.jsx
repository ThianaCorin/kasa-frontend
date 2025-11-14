import { Link } from 'react-router-dom'
import Logo from '../assets/LOGO.png'

function Header() {
    return (
        <nav>
            <img src={Logo} alt="Kasa" />
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    )
}

export default Header