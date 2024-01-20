import { ICountryList } from "@/constants/data";
import { SearchBar } from "../SearchBar";
import { SelectCountry } from "../SelectCountry";

interface IFilterSectionProps {
  setCountryList: (data: ICountryList[]) => void;
}

export function FilterSection({ setCountryList }: IFilterSectionProps) {
  return (
    <div className="flex flex-col gap-4 justify-between my-16 mx-6 sm:flex-row">
      <SearchBar setCountryList={setCountryList} />
      <SelectCountry />
    </div>
  );
}
