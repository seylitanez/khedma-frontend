import { render, screen } from "@testing-library/react"
import { describe, expect } from "vitest";
import Header from "./Header";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("header", () => {
    render(<Header />)
    const inp = screen.queryByText(/accueil/i)
    expect(inp).not.toBeNull()
})