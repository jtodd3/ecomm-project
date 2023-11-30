import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";

export default function CheckoutItem({ checkoutItem }) {
  const { imageUrl, name, quantity, price } = checkoutItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const handleOnItemClear = () => clearItemFromCart(checkoutItem);

  const handleOnItemAdd = () => addItemToCart(checkoutItem);

  const handleOnItemRemove = () => removeItemToCart(checkoutItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleOnItemRemove}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleOnItemAdd}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={handleOnItemClear}>
        &#10005;
      </div>
    </div>
  );
}
