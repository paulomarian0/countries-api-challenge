"use client";
import { regions } from "@/constants/regions";
import { useRegionStorage } from "@/storage/useRegionStore";

export function SelectCountry() {
  const setRegion = useRegionStorage((state) => state.setRegion);

  return (
    <>
      <select
        onChange={(e) => setRegion(e.target.value)}
        id="countries"
        className="bg-gray-50 border text-sm rounded-lg block h-12 p-2.5 outline-none w-full sm:w-48 dark:bg-slate-800 dark:border-none dark:text-white"
      >
        {regions.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
}
