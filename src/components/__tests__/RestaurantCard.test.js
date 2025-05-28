import { render, screen } from "@testing-library/react";
import RestaurantCard, { withVegLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/ResCardMock.json";
import "@testing-library/jest-dom";

it("Should render restaurant card component with props data", () => {
    render(<RestaurantCard resInfo={MOCK_DATA} />)

    const name = screen.getByText("Kancha'S Fast Food");
    expect(name).toBeInTheDocument();
})

it("Should render restaurant card component with veg label", () => {
    const VegRestaurantCard = withVegLabel(RestaurantCard);
    render(<VegRestaurantCard resInfo={MOCK_DATA} />);

    const label = screen.getByText("Veg");
    expect(label).toBeInTheDocument();
})