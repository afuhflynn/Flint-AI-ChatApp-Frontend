import { useEffect, useState } from "react";
import globalAppStore from "../store/app.store";
import globalUserStore from "../store/user.store";

const useLocalTheme = (
  defaultTheme: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const { prefersTheme, setprefersTheme } = globalUserStore();
  const { setAppTheme } = globalAppStore();
  const [theme, setTheme] = useState<string>(() => {
    try {
      const storedTheme: string = prefersTheme;
      return storedTheme ? storedTheme : defaultTheme;
    } catch (e) {
      console.error(`Error retrieving theme: ${e}`);
      return defaultTheme;
    }
  });

  useEffect(() => {
    try {
      // Save theme to db
      setprefersTheme(theme);
      // Populate the general app theme with the new user preferred color scheme
      setAppTheme(prefersTheme);

      // Update document's class for theming
      const rootElement = document.documentElement;
      if (prefersTheme === "dark") {
        rootElement.classList.add("dark");
      } else {
        rootElement.classList.remove("dark");
      }
    } catch (e) {
      console.error(`Error saving theme: ${e}`);
    }
  }, [theme, setprefersTheme, setAppTheme, prefersTheme]);

  return [theme, setTheme];
};

export default useLocalTheme;
