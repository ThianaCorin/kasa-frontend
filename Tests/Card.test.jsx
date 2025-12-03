import { render, screen } from "@testing-library/react";
import Card from "../src/components/Card/Card";
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"

test("Affiche le titre", () => {
    const titre = "Logement Test"
    const cover = "test-image.jpg"
    const id = "test123"
    render(
        <BrowserRouter>
            <Card titre={titre} cover={cover} id={id} />
        </BrowserRouter>
    )
    const element = screen.getByText("Logement Test")
    expect(element).toBeInTheDocument();
})