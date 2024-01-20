"use client";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  const darkMode = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(darkMode ? "light" : "dark")}
      className="flex items-center space-x-1"
    >
      {darkMode ? <IconSun size={20} /> : <IconMoon size={20} />}
    </button>
  );
}
