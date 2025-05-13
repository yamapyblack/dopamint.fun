"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  let currentTheme = theme;

  if (theme === "system") {
    currentTheme =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  }

  return (
    <div className="cursor-pointer bg-background text-primary-green border border-b border-gray-300 p-3 rounded-lg h-full self-center  dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
      {currentTheme === "light" ? (
        <MoonIcon height={24} width={24} onClick={() => setTheme("dark")} />
      ) : (
        <SunIcon height={24} width={24} onClick={() => setTheme("light")} />
      )}
    </div>
  );
};

export default ThemeSwitcher;
