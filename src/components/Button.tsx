"use client";

import "../styles/switch.css";
import { useNextTheme } from "@/hooks/useNextTheme";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export const Button = () => {
  const themeState = useNextTheme();

  if (!themeState) {
    return null;
  }
  const { resolvedTheme, toggle } = themeState;
  return (
    <button className="button" onClick={toggle}>
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-5 w-5 text-slate-800" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-800" />
      )}
    </button>
  );
};
