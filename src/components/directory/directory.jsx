import DirectoryItem from "../directory-item/directory-item";
import { DirectoryContainer } from "./directory.styles.jsx";

export default function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
}
