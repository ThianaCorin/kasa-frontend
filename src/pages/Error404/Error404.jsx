import { Link } from 'react-router-dom'
import './Error404.css'

function Error404() {
    return (
        <div className='error-page'>
            <h1>404</h1>
            <h2>Oups, la page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error404