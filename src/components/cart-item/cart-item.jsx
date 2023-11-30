import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles.jsx";

export default function CartItem({
  cartItem: { name, quantity, price, imageUrl },
}) {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}
