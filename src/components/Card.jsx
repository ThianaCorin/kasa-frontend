import './Card.css'

function Card({ titre, cover }) {
    return (
        <article className='properties'>
            <a href="#">
                <img src={cover} alt={titre} />
                <div className="card-overlay"></div>
                <div className="card-title">
                    <p>{titre}</p>
                </div>
            </a>
        </article>
    )
}

export default Card