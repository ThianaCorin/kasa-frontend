import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Carrousel from "../../components/Carrousel/Carrousel"
import '../Logement/Logement.css'

function Logement() {
    const [logements, setLogements] = useState([])
    console.log(logements)
    useEffect(() => {
        const getLogements = async () => {
            const reponse = await fetch("http://localhost:8080/api/properties")
            const data = await reponse.json()
            setLogements(data)
        }
        getLogements()
    }, [])

    const { logementId } = useParams()
    console.log(logementId)
    const logement = logements.find(l => l.id === logementId);
    // console.log(logement)
    // console.log(Array.isArray(logement.tags))
    // console.log(logement.tags)
    // console.log(logement.rating, typeof logement.rating)


    return (
        <section className="logement">
            {/* on doit attendre que logement existe avant de pouvoir l'afficher, soit avec un if, soit avec && */}
            {logement && <Carrousel images={logement.pictures} />}
            <div className="logement-details">
                {logement && <h2>{logement.title}</h2>}
                {logement && <p>{logement.location}</p>}
                <div className="logement-tags">
                    {logement && logement.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>

            </div>
            <div className="host-details">
                {logement && <p>{logement.host.name}</p>}
                {logement && <img src={logement.host.picture} />}
                {logement && <p>{logement.rating}</p>}
            </div>
            <div className="logement-collapse">
                {logement && <p>{logement.description}</p>}
                {logement && <p>{logement.equipments}</p>}
            </div>
        </section>
    )
}

export default Logement







