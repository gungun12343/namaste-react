const { render, screen, fireEvent } = require("@testing-library/react")
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    //const loginButton = screen.getByRole("button");
    const loginButton = screen.getByRole("button", {name: "Login"});
    //const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
})


it("Should render Header component with cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartText = screen.getByText(/\(\d+items\)/i);
    expect(cartText).toBeInTheDocument();
})


it("Should Login Button to Logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
})