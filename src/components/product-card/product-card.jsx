import { useDispatch, useSelector } from "react-redux";
import Button from "../button/button";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.actions";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
}
