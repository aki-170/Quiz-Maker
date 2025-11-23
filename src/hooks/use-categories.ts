import { useQuery } from "@tanstack/react-query";
import { ICategory, ICategoriesResponse } from "../features/types";

const fetchCategories = async (): Promise<ICategory[]> => {
  const response = await fetch("https://opentdb.com/api_category.php");
  const data: ICategoriesResponse = await response.json();
  return data.trivia_categories;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};
