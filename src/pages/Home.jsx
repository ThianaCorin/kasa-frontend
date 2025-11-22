import Banner from "../components/Banner"
import { useState, useEffect } from 'react'
import Card from "../components/Card"
import homeBanner from '../assets/home.png'

function Home() {

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
    return (
        <div>
            <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
            <section>
                {logements.map((element) => (<Card key={element.id} titre={element.title} cover={element.cover} />)
                )}
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
