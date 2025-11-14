function Card({ titre, cover }) {
    return (
        <div>
            <p>{titre}</p>
            <img src={cover} alt={titre} />
        </div>
    )
}

export default Card