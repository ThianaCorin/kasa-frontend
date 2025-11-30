import './Carrousel.css'
import { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'

function Carrousel({ images }) {

    const [photo, setPhoto] = useState(0);
    const goToNext = () => {
        if (photo === images.length - 1) {
            setPhoto(0)
        }
        else {
            setPhoto(photo + 1)
        }
        // console.log("clic →, photo =", photo);
    }
    const goToPrevious = () => {
        if (photo === 0) {
            setPhoto(images.length - 1)
        }
        else {
            setPhoto(photo - 1)
        }
    }
    return (
        <div className='carrousel'>
            <div className="fleche-gauche">
                {images.length > 1 && <span onClick={goToPrevious}><img src={arrowLeft} alt="arrow_left" /></span>}
            </div>
            <img className='carrousel-photo' src={images[photo]} />
            {images.length > 1 && <h3>{photo + 1} / {images.length}</h3>}
            <div className="fleche-droite">
                {images.length > 1 && <span onClick={goToNext}><img src={arrowRight} alt="arrow_right" /></span>}
            </div>
        </div>
    )
}

export default Carrousel