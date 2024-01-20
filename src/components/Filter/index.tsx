import { SearchBar } from "./components/SearchBar";
import { SelectCountry } from "./components/SelectCountry";

const FilterSection = () => {
  return (
    <div className="flex flex-col gap-4 justify-between my-16 mx-6 sm:flex-row">
      <SearchBar />
      <SelectCountry />
    </div>
  );
};

export { FilterSection };
