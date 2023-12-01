import { useDispatch, useSelector } from "react-redux";
import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
  Property,
} from "./checkout-item.styles.jsx";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.actions.js";

export default function CheckoutItem({ checkoutItem }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { imageUrl, name, quantity, price } = checkoutItem;

  const handleOnItemClear = () =>
    dispatch(clearItemFromCart(cartItems, checkoutItem));

  const handleOnItemAdd = () =>
    dispatch(addItemToCart(cartItems, checkoutItem));

  const handleOnItemRemove = () => removeItemFromCart(cartItems, checkoutItem);

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
