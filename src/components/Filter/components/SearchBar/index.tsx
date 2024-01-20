"use client";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { countryList } from "@/constants/data";
import { useRegionStorage } from "@/storage/useRegionStore";
import { useListCountriesStorage } from "@/storage/useListCountries";

export function SearchBar() {
  const [search, setSearch] = useState<string>("");
  const setListContries = useListCountriesStorage(
    (state) => state.setCountries
  );
  const region = useRegionStorage((state) => state.region);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const haveSelectedRegion = region !== "all";

    const filteredByRegionList = countryList.filter(
      (item) => item.region.toLowerCase() === region.toLowerCase()
    );

    const selectFilter = haveSelectedRegion
      ? filteredByRegionList
      : countryList;

    const filteredList = selectFilter.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setListContries(filteredList);

    e.preventDefault();
  };

  return (
    <form onSubmit={(data) => handleSubmit(data)}>
      <div className="relative">
        <div
          id="search"
          className="absolute rounded-md inset-y-0 start-0 flex items-center ps-3 pointer-events-none dark:bg-slate-800"
        >
          <IconSearch />
        </div>
        <input
          type="search"
          className="w-full sm:w-96 px-4 h-12 ps-10 text-sm border-none rounded-md dark:bg-slate-800 outline-none"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
}
