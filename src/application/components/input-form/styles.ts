import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: (color: string) => ({
    color,
    flexDirection: "row",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color,
  }),

  divisor: (color: string) => ({
    borderRightWidth: 1,
    borderRightColor: color,
  }),

  input: (color: string) => ({
    color,
    height: 18,
  }),

  label: (color: string) => ({
    color,
  }),

  vertical: {
    flexGrow: 1,
    gap: 5,
    minHeight: 62,
    justifyContent: "center",
    paddingHorizontal: 17,
  },

  button: {
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  error: {
    color: theme.colors.alert.default,
  },
}));
