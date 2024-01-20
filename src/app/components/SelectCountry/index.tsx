"use client";
import { useState } from "react";

export function SelectCountry() {
  const [country, setCountry] = useState("");

  return (
    <>
      <select
        id="countries"
        className="bg-gray-50 border text-sm rounded-lg block w-48 h-12 p-2.5"
      >
        <option>All</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </>
  );
}
