import {
  selectCategories,
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../category.selector";

const mockState = {
  categories: {
    isLoading: false,
    categories: [
      {
        title: "mens",
        imageUrl: "test1",
        items: [
          { id: 1, name: "Product 1" },
          { id: 2, name: "Product 2" },
        ],
      },
      {
        title: "womens",
        imageUrl: "test2",
        items: [
          { id: 3, name: "Product 3" },
          { id: 4, name: "Product 4" },
        ],
      },
    ],
  },
};

describe("Category selectors", () => {
  test("selectCategories should return the categoriesData", () => {
    const categoriesSlice = selectCategories(mockState);
    expect(categoriesSlice).toEqual(mockState.categories.categories);
  });

  test("selectCategoriesIsLoading should return isLoading state", () => {
    const isLoading = selectCategoriesIsLoading(mockState);
    expect(isLoading).toEqual(false);
  });

  test("selectCategoriesMap should convert the items array to a map", () => {
    const categoriesMap = selectCategoriesMap(mockState);
    const expectedCategoriesMap = {
      mens: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
      ],
      womens: [
        { id: 3, name: "Product 3" },
        { id: 4, name: "Product 4" },
      ],
    };

    expect(categoriesMap).toEqual(expectedCategoriesMap);
  });
});
