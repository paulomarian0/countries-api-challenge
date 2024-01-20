import { IconSearch } from "@tabler/icons-react";

export function SearchBar() {
  return (
    <form>
      <div className="relative">
        <div className="absolute rounded-md inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
          <IconSearch />
        </div>
        <input
          type="search"
          className="w-96 px-4 h-12 ps-10 text-sm border-none rounded-md "
          placeholder="Search for a country..."
        />
      </div>
    </form>
  );
}
