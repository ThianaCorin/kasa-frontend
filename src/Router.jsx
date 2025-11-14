import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error404'
import About from './pages/About'
import Logement from './pages/Logement'
import Header from './components/Header'
import Footer from './components/Footer'

function Routeur() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:logementNumber" element={<Logement />} />
            </Routes>
            <Footer />
        </Router>

    )
}

export default Routeur


