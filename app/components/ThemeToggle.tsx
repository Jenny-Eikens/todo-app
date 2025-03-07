"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const iconSun = <img src="/images/icon-sun.svg" alt="Sun icon" />;
const iconMoon = <img src="/images/icon-moon.svg" alt="Moon icon" />;

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";
  const icon = isDark ? iconSun : iconMoon;

  return (
    <button
      className="scale-[0.85] p-2 md:scale-100"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {icon}
    </button>
  );
}

export default ThemeToggle;
