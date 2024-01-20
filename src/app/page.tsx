import { CountryList } from "./components/ContryList";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="bg-gray-200 dark:bg-gray-900">
      <Header />
      <CountryList />
    </div>
  );
}
