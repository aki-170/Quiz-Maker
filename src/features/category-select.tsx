import { useAtom } from "jotai";
import Select from "react-select";
import { selectedCategoryAtom } from "../atoms/atoms";
import { useCategories } from "../hooks/use-categories";

export const CategorySelect = () => {
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);
  const { data: categories, isLoading, error } = useCategories();

  const options =
    categories?.map((category) => ({
      value: category.id,
      label: category.name,
    })) || [];

  const selectedOption =
    options.find((opt) => opt.value === selectedCategory) || null;

  return (
    <Select
      id="categorySelect"
      inputId="categorySelect"
      options={options}
      value={selectedOption}
      onChange={(option) => setSelectedCategory(option?.value || 0)}
      placeholder="Select a category"
      isLoading={isLoading}
      isDisabled={!!error}
    />
  );
};
