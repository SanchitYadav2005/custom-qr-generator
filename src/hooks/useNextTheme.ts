import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useNextTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }
  const toggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return { resolvedTheme, toggle };
}
