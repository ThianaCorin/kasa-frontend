import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Collapse from "../src/components/Collapse/Collapse";
import "@testing-library/jest-dom"
import { expect } from "vitest";

test("Ouvre le collapse au clic", async () => {
    const header = "Titre test";
    const content = "Contenu test";
    render(<Collapse header={header} content={content} />)
    const element = screen.queryByText("Contenu test")
    expect(element).not.toHaveClass("show")
    await userEvent.click(screen.getByText(header));
    const elementAfterClick = screen.getByText("Contenu test")
    expect(elementAfterClick).toHaveClass("show")
}
)