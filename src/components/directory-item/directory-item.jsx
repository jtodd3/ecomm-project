import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles.jsx";

export default function DirectoryItem({ category }) {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const handleOnNavigate = () => navigate(`shop/${title}`);

  return (
    <DirectoryItemContainer onClick={handleOnNavigate}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}
