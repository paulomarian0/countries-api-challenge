import { contryList } from "@/constants/data";
import Image from "next/image";

export function CountryList() {
  return (
    <main className="grid grid-cols-4">
      {contryList?.map((item, index) => (
        <section key={index} className="m-2">
          <div className="h-40">
            <Image
              className="object-cover w-full h-full"
              src={item.flag}
              alt={item.name}
              width={100}
              height={100}
            />
          </div>

          <ol className="bg-blue-500">
            <li className="font-bold">{item.name}</li>
            <li>População:{item.population}</li>
            <li>Region:{item.region}</li>
            <li>Capital:{item.capital}</li>
          </ol>
        </section>
      ))}
    </main>
  );
}
