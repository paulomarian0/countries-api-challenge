"use client";
import { FilterSection } from "../../../Filter";
import { useListCountriesStorage } from "@/storage/useListCountries";
import { ContryCard } from "../CountryCard";

const CountryList = () => {
  const contries = useListCountriesStorage((state) => state.countries);

  return (
    <div>
      <FilterSection />
      <main className="grid m-4 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5">
        {contries?.map((item, index) => (
          <ContryCard
            key={index}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}
            flag={item.flag}
          />
        ))}
      </main>
    </div>
  );
};

export { CountryList };
