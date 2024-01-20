import { Header } from "../Header";
import { CountryList } from "./components/CountryList";

const Body = () => (
  <div className="bg-gray-200 dark:bg-gray-900 h-screen">
    <Header />
    <CountryList />
  </div>
);

export { Body };
