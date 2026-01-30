"use client";

import { useEffect, useState } from "react";
import {
  applyTheme,
  getStoredTheme,
  getSystemPreference,
  setStoredTheme,
  type Theme,
} from "@/lib/theme";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = getStoredTheme();
    const next: Theme = stored || getSystemPreference();
    setThemeState(next);
    applyTheme(next);
  }, []);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    setStoredTheme(next);
    applyTheme(next);
  };

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return { theme, setTheme, toggleTheme, mounted };
}
