"use client";
import Image from "next/image";
import { useState } from "react";
import { FilterSection } from "../FilterSection";
import { ICountryList, countryList } from "@/constants/data";

export function CountryList() {
  const [list, setList] = useState<ICountryList[]>(
    countryList as ICountryList[]
  );

  return (
    <div>
      <FilterSection setCountryList={setList} />

      <main className="grid m-4 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5">
        {list?.map((item, index) => (
          <section key={index} className="m-2 shadow-lg">
            <div className="h-40">
              <Image
                className="object-cover w-full h-full rounded-t-md "
                src={item.flag}
                alt={item.name}
                width={100}
                height={100}
              />
            </div>

            <ol className="px-5 py-6 bg-slate-50 rounded-b-md h-44 dark:bg-slate-800">
              <li className="font-extrabold pb-2 text-xl">{item.name}</li>
              <li className="mb-1">
                <span className="font-semibold">Population:</span>
                {item.population}
              </li>
              <li className="mb-1">
                <span className="font-semibold">Region:</span>
                {item.region}
              </li>
              <li className="mb-1">
                <span className="font-semibold">Capital:</span>
                {item.capital}
              </li>
            </ol>
          </section>
        ))}
      </main>
    </div>
  );
}
