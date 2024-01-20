"use client";
import { regions } from "@/constants/regions";
import { useState } from "react";

export function SelectCountry() {
  const [country, setCountry] = useState("all");

  return (
    <>
      <select
        onChange={(e) => setCountry(e.target.value)}
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
