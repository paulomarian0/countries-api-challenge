"use client";
import { IconMoon, IconSunFilled, IconSunHigh } from "@tabler/icons-react";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-500">
      <h1 className="text-2xl font-bold">Where in the world?</h1>
      <button className="text-white flex gap-2">
        <IconMoon size={22} />
        {/* <IconSunHigh /> */}
        Dark Mode
      </button>
    </header>
  );
}
