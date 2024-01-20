import { SearchBar } from "../SearchBar";
import { SelectCountry } from "../SelectCountry";

export function FilterSection() {
  return (
    <div className="flex justify-between my-16 mx-6">
      <SearchBar />
      <SelectCountry />
    </div>
  );
}
