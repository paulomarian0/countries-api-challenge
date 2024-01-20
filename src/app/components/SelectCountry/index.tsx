"use client";
import useRegionStore from "@/app/storage/useRegionStore";
import { regions } from "@/constants/regions";
import { useState } from "react";

export function SelectCountry() {
  const setRegion = useRegionStore((state) => state.setRegion);

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
