import { CountryList } from "./components/ContryList";
import { FilterSection } from "./components/FilterSection";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header />
      <CountryList />
    </div>
  );
}
