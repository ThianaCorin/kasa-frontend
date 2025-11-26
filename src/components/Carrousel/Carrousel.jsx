import './Carrousel.css'
import { useState } from 'react';

function Carrousel({ images }) {

    const [photo, setPhoto] = useState(0);
    const goToNext = () => {
        if (photo === images.length - 1) {
            setPhoto(0)
        }
        else {
            setPhoto(photo + 1)
        }
        console.log("clic →, photo =", photo);
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
                {images.length > 1 && <p onClick={goToPrevious}>←</p>}
            </div>
            <img src={images[photo]} />
            {images.length > 1 && <p>{photo + 1} / {images.length}</p>}
            <div className="fleche-droite">
                {images.length > 1 && <p onClick={goToNext}>→</p>}
            </div>
        </div>
    )
}

export default Carrousel