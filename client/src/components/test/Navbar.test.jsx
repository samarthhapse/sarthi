import { screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "../utils/test-utils"
import Navbar from "../Basic/Navbar";


describe("Navbar Component", () => {

    it("should render the all Navigation Tabs", async () => {
        render(<Navbar/>);
        const themeIcon = await screen.getByText(/☀️/i);

        expect(themeIcon).toBeDefined();
    });

    it("should have correct aria-label", async () => {
        render(<Navbar/>);

        const navAriaLabel = await screen.getByLabelText(/Site Nav/i);

        expect(navAriaLabel).toBeDefined();
    });

});