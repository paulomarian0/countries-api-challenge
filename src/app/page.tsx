import { ThemeProvider } from "next-themes";
import { CountryList } from "./components/ContryList";
import { FilterSection } from "./components/FilterSection";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="bg-gray-200 dark:bg-slate-950">
      <Header />
      <CountryList />
    </div>
  );
}
