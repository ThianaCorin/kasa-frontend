import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error404'
import About from './pages/About'
import Logement from './pages/Logement'

function Routeur() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:logementNumber" element={<Logement />} />
            </Routes>
        </Router>

    )
}

export default Routeur


