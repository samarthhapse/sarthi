import { screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "../utils/test-utils";
import App from "../../App";


describe("App Navigation", () => {

    it("should render root Page", async () => {
        render(<App/>);

        const headlineOne = await screen.getByText(/Your Bridge to Expert Insights + Guidance/i);
        const headlineTwo = await screen.getByText(/Your One-Stop Destination for Bug Solving, Tech Career, Assistance, Academic Support, Career Advice, Global Connection/i);
        
        expect(headlineOne).toBeDefined();
        expect(headlineTwo).toBeDefined();
    });

    it("should render the Auth page", async () => {
        render(<App/>, { route: "/Landing" });

        const guideHeadline = await screen.getByText(/Assistance/i);

        expect(guideHeadline).toBeDefined();
    });

    it("should render the non exesting Page", async () => {
        render(<App/>, { route: "/invalidPath"});

        const notFoundCodeHeadline = await screen.getByText(/404/i);
        const pageNotFoundText = await screen.getByText(/Page not found/i);
        const notFoundDescription = await screen.getByText(/The page you are looking for does not exist./i);
        const goBackHometext = await screen.getByText(/Go back home/i);

        expect(notFoundCodeHeadline).toBeDefined();
        expect(pageNotFoundText).toBeDefined();
        expect(notFoundDescription).toBeDefined();
        expect(goBackHometext).toBeDefined();
    });
    
});