import { useContext } from "react";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../contexts/cart.context";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}
