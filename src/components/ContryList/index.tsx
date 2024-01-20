"use client";
import Image from "next/image";
import { FilterSection } from "../FilterSection";
import useListCountriesStorage from "@/storage/useListCountries";

export function CountryList() {
  const contries = useListCountriesStorage((state) => state.countries);

  return (
    <div>
      <FilterSection />
      <main className="grid m-4 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5">
        {contries?.map((item, index) => (
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
                <span className="font-semibold mr-1">Population:</span>
                {item.population.toLocaleString("en-US")}
              </li>
              <li className="mb-1">
                <span className="font-semibold mr-1">Region:</span>
                {item.region}
              </li>
              <li className="mb-1">
                <span className="font-semibold mr-1">Capital:</span>
                {item.capital}
              </li>
            </ol>
          </section>
        ))}
      </main>
    </div>
  );
}
