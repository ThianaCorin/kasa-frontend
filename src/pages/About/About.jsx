import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import aboutBanner from '../../assets/about.png'
import './About.css'


function About() {
    return (
        <div>
            <Banner image={aboutBanner} />
            <section>
                <div className='about-collapse'>
                    <div className='about-row'>
                        <Collapse header="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes" />
                    </div>
                    <div className='about-row'>
                        <Collapse header="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                    </div>
                    <div className='about-row'>
                        <Collapse header="Service" content="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." />
                    </div>
                    <div className='about-row'>
                        <Collapse header="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
                    </div>
                </div>
            </section >
        </div >
    )
}

export default About

