const toggleLocalTheme = (theme: string) => {
  try {
    // Update document's class for theming
    const rootElement = document.documentElement;
    if (theme === "dark") {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  } catch (e) {
    console.error(`Error saving theme: ${e}`);
  }
};

export default toggleLocalTheme;
