import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: (backgroundColor: string) => ({
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor,
  }),

  text: (color: string) => ({
    color,
    textAlign: "center",
  }),
}));
