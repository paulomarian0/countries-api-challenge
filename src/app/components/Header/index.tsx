"use client";
import ThemeSwitcher from "../ThemeSwitcher";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm dark:bg-slate-800">
      <h1 className="text-2xl font-bold">Where in the world?</h1>
      <ThemeSwitcher />
    </header>
  );
}
