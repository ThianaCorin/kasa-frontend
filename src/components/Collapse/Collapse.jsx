import './Collapse.css'
import { useState } from 'react'

function Collapse({ header, content }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);
    return (
        <section className="collapse">
            <div className="collapse-header" onClick={toggle}>
                {header}
                <i className={`fa-solid fa-angle-up ${isOpen ? "open" : ""}`}
                ></i>
            </div>

            <div className="collapse-content">
                {isOpen && content}
            </div>
        </section>
    )
}

export default Collapse


