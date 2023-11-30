import "./cart-item.styles.scss";

export default function CartItem({
  cartItem: { name, quantity, price, imageUrl },
}) {
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
}
