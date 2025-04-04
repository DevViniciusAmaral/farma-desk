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
    alert: {
      default: "#D95154",
      light: "#FFECEC",
    },
    text: "#000000",
  },
  fonts,
} as const;
