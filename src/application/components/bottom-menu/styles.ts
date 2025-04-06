import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    alignItems: "center",
    backgroundColor: "transparent",
  },

  content: {
    width: 281,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    gap: 5,
    borderRadius: 100,
    backgroundColor: theme.colors.primary.default,
    borderWidth: 1,
    borderColor: theme.colors.primary.light,
  },

  button: (isActive: boolean) => ({
    padding: 20,
    borderRadius: 100,
    backgroundColor: isActive ? theme.colors.secondary.default : "transparent",
  }),

  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
}));
