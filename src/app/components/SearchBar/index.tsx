import { IconSearch } from "@tabler/icons-react";

export function SearchBar() {
  return (
    <form>
      <label className="mb-2 text-sm font-medium sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IconSearch />
        </div>
        <input
          type="search"
          id="default-search"
          className="w-full p-4 ps-10 text-sm border-none rounded-md"
          placeholder="Search for a country..."
          required
        />
      </div>
    </form>
  );
}
