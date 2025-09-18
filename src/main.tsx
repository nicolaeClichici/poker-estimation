import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { AppThemeProvider } from "@/providers";
import { Provider as StateProvider } from "jotai";

createRoot(document.getElementById("root")!).render(
  <StateProvider>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </StateProvider>,
);
