import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../src/ui/Button";

describe("index/Button", () => {
  it("If there is a disable value, it should be disabled.", () => {
    render(<Button disabled />);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("The onClick function should work normally when the button is clicked.", async () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick} />);

    await userEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalled();
  });
});
