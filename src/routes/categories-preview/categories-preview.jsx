import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/category/category.selector";
import Spinner from "../../components/spinner/spinner";

export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { isLoading } = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        ))
      )}
    </>
  );
}
