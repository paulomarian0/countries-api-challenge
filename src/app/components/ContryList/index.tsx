import { contryList } from "@/constants/data";
import Image from "next/image";

export function CountryList() {
  return (
    <main className="grid grid-cols-4 m-4">
      {contryList?.map((item, index) => (
        <section key={index} className="m-2">
          <div className="h-40">
            <Image
              className="object-cover w-full h-full rounded-t-md"
              src={item.flag}
              alt={item.name}
              width={100}
              height={100}
            />
          </div>

          <ol className="px-5 py-6 bg-slate-50 rounded-b-md h-40">
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
  );
}
