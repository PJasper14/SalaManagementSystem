"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

interface DarkModeToggleProps {
  className?: string;
}

export function DarkModeToggle({ className }: DarkModeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={cn(
          "rounded-lg p-2 h-10 w-10 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800",
          className
        )}
        aria-hidden
      >
        <span className="sr-only">Loading theme</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2",
        className
      )}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-amber-400" aria-hidden />
      ) : (
        <Moon className="h-5 w-5 text-zinc-600" aria-hidden />
      )}
    </button>
  );
}
