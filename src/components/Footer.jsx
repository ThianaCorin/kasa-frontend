import logo from '../assets/logo-white-desktop.png'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <img src={logo} alt="Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer