import { useContext } from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
  Property,
} from "./checkout-item.styles.jsx";
import { CartContext } from "../../contexts/cart.context";

export default function CheckoutItem({ checkoutItem }) {
  const { imageUrl, name, quantity, price } = checkoutItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const handleOnItemClear = () => clearItemFromCart(checkoutItem);

  const handleOnItemAdd = () => addItemToCart(checkoutItem);

  const handleOnItemRemove = () => removeItemToCart(checkoutItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Property>{name}</Property>
      <Property>
        <div className="arrow" onClick={handleOnItemRemove}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleOnItemAdd}>
          &#10095;
        </div>
      </Property>
      <Property className="price">${price}</Property>
      <RemoveButton onClick={handleOnItemClear}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}
