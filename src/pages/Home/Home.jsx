import Banner from "../../components/Banner/Banner"
import { useState, useEffect } from 'react'
import Card from "../../components/Card/Card"
import homeBanner from '../../assets/home.png'
import './Home.css'

function Home() {

    const [logements, setLogements] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        const getLogements = async () => {
            try {
                const reponse = await fetch("http://localhost:8080/api/properties")
                const data = await reponse.json()
                setLogements(data)
                setIsLoading(false)
            }
            catch {
                setError(true)
                setIsLoading(false)
            }
        }
        getLogements()
    }, [])
    return (
        <div>
            <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
            <section className="properties-section">
                <div className="properties-div">
                    {isLoading && <h3>Recherche de logements en cours...</h3>}
                    {error && <h3>Une erreur s'est produite lors du chargement des logements. Veuillez actualiser la page.</h3>}
                    {!isLoading && !error && logements.map((element) => (<Card key={element.id} id={element.id} titre={element.title} cover={element.cover} />)
                    )}
                </div>
            </section>
        </div>
    )
}

export default Home


// useEffect : exécute du code au chargement du composant (une seule fois grâce à [])
// On crée une petite fonction async à l’intérieur du useEffect.
// Cette fonction fait :
// 1) un fetch vers l’API pour récupérer les logements
// 2) transforme la réponse en JSON
// 3) met les données dans le state avec setLogements
// Ensuite on appelle la fonction pour lancer la récupération des données.
