import { render,screen } from "@testing-library/react"
import { describe, expect } from"vitest";
import Input from "./Input";


describe("input",()=>{
    render(<Input className="test" type="text" value={"testt"} ></Input>)
    const inp = screen.queryByText(/testt/i)
    expect(inp).not.toBeNull()
})