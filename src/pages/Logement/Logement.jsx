import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Carrousel from "../../components/Carrousel/Carrousel"
import '../Logement/Logement.css'
import Collapse from "../../components/Collapse/Collapse"

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

    // console.log(logement.equipments)
    // console.log(Array.isArray(logement.equipments))

    return (
        <section className="logement">
            {/* on doit attendre que logement existe avant de pouvoir l'afficher, soit avec un if, soit avec &&  */}
            {logement && <Carrousel images={logement.pictures} />}
            <div className="logement-main">
                <div className="logement-details">
                    {logement && <h2>{logement.title}</h2>}
                    {logement && <p>{logement.location}</p>}
                    <div className="logement-tags">
                        {logement && logement.tags.map(tag => <span key={tag}>{tag}</span>)}
                    </div>
                </div>
                <div className="host-and-rating">
                    <div className="host-details">
                        {logement && <p>{logement.host.name}</p>}
                        {logement && <img src={logement.host.picture} />}
                    </div>
                    {logement && (
                        <div className="logement-rating">
                            {Array(5).fill(0).map((_, index) =>
                                index < parseInt(logement.rating) ? (<i className="fa-solid fa-star fa-2xl star-active"></i>) : (<i className="fa-solid fa-star fa-2xl star-inactive"></i>)
                            )}
                        </div>)}
                </div>
            </div>
            <div className="logement-collapse">
                {logement && <Collapse header="Description" content={logement.description} />}
                {logement && <Collapse header="Équipements" content={<ul>{logement.equipments.map(equipement => (<li key={equipement}>{equipement}</li>))}</ul>} />}
            </div>
        </section>

    )
}

export default Logement







