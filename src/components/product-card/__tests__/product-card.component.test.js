import { screen, fireEvent } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test/test.utils";
import ProductCart from "../product-card.component";

describe("Product Card tests", () => {
  test("it should add the product item when Product Card button is clicked", async () => {
    const mockProduct = {
      id: 1,
      imageUrl: "test",
      name: "Item A",
      price: 3.44,
    };
    const { store } = renderWithProviders(
      <ProductCart product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCartButtonElement = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButtonElement);
    expect(store.getState().cart.cartItems.length).toBe(1);
    expect(store.getState().cart.cartItems).toStrictEqual([
      { ...mockProduct, quantity: 1 },
    ]);
  });
});
