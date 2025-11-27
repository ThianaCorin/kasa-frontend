import './Card.css'
import { NavLink } from 'react-router-dom'

function Card({ titre, cover, id }) {
    return (
        <article className='properties'>
            <NavLink to={/logement/ + id}>
                <img src={cover} alt={titre} />
                <div className="card-overlay"></div>
                <div className="card-title">
                    <p>{titre}</p>
                </div>

            </NavLink>
        </article >
    )
}

export default Card