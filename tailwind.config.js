/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          bg: {
            dark: "#1A1F36",
            light: "#FFFFFF",
          },
          "accent-blue": {
            dark: "#3366FF",
            light: "#0056D2",
          },
          "light-blue": {
            dark: "#99CCFF",
            light: "#66B2FF",
          },
          purple: {
            dark: "#6A5ACD",
            light: "#66B2FF",
          },
        },
        neutral: {
          "dark-grey": {
            dark: "#2B2F4C",
            light: "#F7FAFC",
          },
          "mid-grey": {
            dark: "#4B5563",
            light: "#CBD5E0",
          },
          "light-grey": {
            dark: "#E5E7EB",
            light: "#2D3748",
          },
        },
        text: {
          primary: {
            dark: "#FFFFFF",
            light: "#2D3748",
          },
          secondary: {
            dark: "#A0AEC0",
            light: "#718096",
          },
        },
        CTA: {
          "hover-blue": {
            dark: "#1E90FF",
            light: "#0046A2",
          },
        },
      },
      fontSize: {
        header: "36px",
        "sub-header": "28px",
        "body-text": "16px",
        "muted-text": "14px",
      },
      fontWeight: {
        headings: "700",
        "sub-headings": "600",
        "body-text": "400",
        "muted-text": "300",
      },
    },
  },
  plugins: [],
};
