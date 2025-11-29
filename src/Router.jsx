import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Error from './pages/Error404/Error404'
import About from './pages/About/About'
import Logement from './pages/Logement/Logement'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './Router.css'

function Routeur() {
    return (
        <Router>
            <div className="layout">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Error />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/logement/:logementId" element={<Logement />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>

    )
}

export default Routeur


