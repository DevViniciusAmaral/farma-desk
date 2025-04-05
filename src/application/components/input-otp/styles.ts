import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginTop: 24,
  },

  input: (isActive: boolean) => ({
    paddingVertical: 26,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
    minHeight: 92,
    textAlign: "center",
    fontSize: 24,
    borderColor: isActive
      ? theme.colors.secondary.dark
      : theme.colors.primary.dark,
    backgroundColor: isActive
      ? theme.colors.secondary.light
      : theme.colors.primary.light,
  }),
}));
