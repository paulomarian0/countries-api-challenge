"use client";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { ICountryList, countryList } from "@/constants/data";

interface ISearchBarProps {
  setCountryList: (data: ICountryList[]) => void;
}

export function SearchBar({ setCountryList }: ISearchBarProps) {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const filteredList = countryList.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setCountryList(filteredList);

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
