import './Banner.css'

function Banner({ image, title }) {
    return (
        <section className='banner'>
            <img src={image} alt="Banner" />
            <div className="banner-overlay"></div>
            {title && <h1 className="banner-text">{title}</h1>}
        </section>
    )
}

export default Banner