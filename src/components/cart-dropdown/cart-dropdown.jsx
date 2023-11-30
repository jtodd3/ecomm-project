import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.styles.scss";
import { CartContext } from "../../contexts/cart.context";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleGoToCheckout = () => navigate("/checkout");

  return (
    <div className="cart-dropdown-container">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
      ) : (
        <div className="empty-message">No items in your cart</div>
      )}
      <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
}
