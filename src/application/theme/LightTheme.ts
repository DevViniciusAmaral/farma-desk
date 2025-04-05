import { fonts } from "./Fonts";

export const lightTheme = {
  colors: {
    primary: {
      default: "#FFFFFF",
      light: "#F1F1F1",
      dark: "#666666",
    },
    secondary: {
      default: "#67B58A",
      light: "#E1F0E8",
      dark: "#187D45",
    },
    tertiary: {
      default: "#9747FF",
      light: "#F8E9FE",
    },
    alert: {
      default: "#D95154",
      light: "#FFECEC",
    },
    text: "#000000",
  },
  fonts,
} as const;
