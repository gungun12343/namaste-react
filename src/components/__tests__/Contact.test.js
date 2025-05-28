import { render, screen } from "@testing-library/react"
import { Contact } from "../Contact"
import "@testing-library/jest-dom"

describe("Contact us page test cases", () => {
    
    test("should load contact us component", () => {
        render(<Contact />);
        // Querying
        const heading = screen.getByRole("heading");
        // Assertion
        expect(heading).toBeInTheDocument();
    })

    test("should load button in contact us component", () => {
        render(<Contact />);

        const button = screen.getByText("Send");
        expect(button).toBeInTheDocument();
    })

    test("should load input name in contact us component", () => {
        render(<Contact />);

        const inputText = screen.getByPlaceholderText("Full Name");
        expect(inputText).toBeInTheDocument();
    })

    test("should load 3 input boxes in contact us component", () => {
        render(<Contact />);

        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(3);
    })
})

