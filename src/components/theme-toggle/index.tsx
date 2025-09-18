import { useEffect } from "react";
import { useAtom } from "jotai";
import { themeAtom } from "@/atoms";
import { StyledToggle } from "./theme-toggle.styled.ts";

export const ThemeToggle = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    const lsValue = localStorage.getItem("theme");
    if (lsValue === "light" || lsValue === "dark") {
      setTheme(lsValue);
    }
  }, [setTheme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <StyledToggle className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
      <span className="slider round"></span>
    </StyledToggle>
  );
};
