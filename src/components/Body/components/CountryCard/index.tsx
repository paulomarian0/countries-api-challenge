import Image from "next/image";

interface ICountryCardProps {
  name: string;
  population: number;
  region: string;
  capital?: string;
  flag: string;
}

const ContryCard = ({
  name,
  population,
  region,
  capital,
  flag,
}: ICountryCardProps) => (
  <section className="m-2 shadow-lg">
    <div className="h-40">
      <Image
        className="object-cover w-full h-full rounded-t-md "
        src={flag}
        alt={name}
        width={100}
        height={100}
      />
    </div>

    <ol className="px-5 py-6 bg-slate-50 rounded-b-md h-44 dark:bg-slate-800">
      <li className="font-extrabold pb-2 text-xl">{name}</li>
      <li className="mb-1">
        <span className="font-semibold mr-1">Population:</span>
        {population.toLocaleString("en-US")}
      </li>
      <li className="mb-1">
        <span className="font-semibold mr-1">Region:</span>
        {region}
      </li>
      <li className="mb-1">
        <span className="font-semibold mr-1">Capital:</span>
        {capital}
      </li>
    </ol>
  </section>
);

export { ContryCard };
