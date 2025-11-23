import { useAtom } from "jotai";
import Select from "react-select";
import { selectedDifficultyAtom } from "../atoms/atoms";

export const DifficultySelect = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useAtom(
    selectedDifficultyAtom
  );

  const difficulties = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];

  const selectedOption =
    difficulties.find((opt) => opt.value === selectedDifficulty) || null;

  return (
    <Select
      id="difficultySelect"
      inputId="difficultySelect"
      options={difficulties}
      value={selectedOption}
      onChange={(option) => setSelectedDifficulty(option?.value || "")}
      placeholder="Select difficulty"
    />
  );
};
