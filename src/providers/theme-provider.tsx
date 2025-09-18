import { ThemeProvider } from "@emotion/react";
import { useAtom } from "jotai";
import type { PropsWithChildren } from "react";
import { themeAtom } from "@/atoms";
import { darkTheme, lightTheme } from "@/styles/theme.ts";

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme] = useAtom(themeAtom);

  console.log(theme);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};
