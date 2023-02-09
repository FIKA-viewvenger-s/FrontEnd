import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "../stories/Button.stories";

describe("index/Button", () => {
  const { Contained, Disabled } = composeStories(stories);

  it("If there is a disable value, it should be disabled.", () => {
    render(<Disabled disabled />);

    const test = screen.getByRole("button");

    expect(test).toBeDisabled();
    expect(test).toMatchSnapshot();
  });

  it("The onClick function should work normally when the button is clicked.", () => {
    const handleClick = jest.fn();

    render(<Contained onClick={handleClick} />);

    const buttonElement = screen.getByRole("button");
    buttonElement.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toMatchSnapshot();
  });
});
