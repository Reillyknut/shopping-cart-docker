import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddProduct from "../components/AddProduct";

describe("AddProduct", () => {
  let func;
  let productName;
  let productPrice;
  let productQuantity;
  let addBtn;

  beforeEach(() => {
    func = jest.fn();
    render(<AddProduct onAddProduct={func} />);
    productName = screen.getByRole("textbox", { name: "Product Name" });
    productPrice = screen.getByRole("textbox", { name: "Price" });
    productQuantity = screen.getByRole("textbox", { name: "Quantity" });
    addBtn = screen.getByRole("link", { name: "Add" });
  });
  it("contains h3 heading", () => {
    const heading = screen.getByRole("heading", {
      level: 3,
      name: "Add Product",
    });
    expect(heading).toBeInTheDocument();
  });
  it("displays the form when the button is clicked", () => {
    userEvent.click(addBtn);
    expect(productName).toBeVisible();
  });
  it("changes the input state when product name is changed", () => {
    const testProductName = "Apple Tag"
    userEvent.type(productName, testProductName);
    expect(productName).toHaveValue(testProductName);
  });
  it("changes the input state when price is changed", () => {
    const testPrice = "100"
    userEvent.type(productPrice, testPrice);
    expect(productPrice).toHaveValue(testPrice);
  });
  it("changes the input state when quantity is changed", () => {
    const testQuantity = "25"
    userEvent.type(productQuantity, testQuantity);
    expect(productQuantity).toHaveValue(testQuantity);
  });

});
