import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    gap: 8,
    marginLeft: -8,
    alignItems: "center",
  },

  square: (checked: boolean) => ({
    width: 28,
    height: 28,
    borderRadius: 4,
    borderWidth: checked ? 0 : 1,
    borderColor: theme.colors.primary.dark,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: checked
      ? theme.colors.secondary.default
      : theme.colors.primary.default,
  }),
}));
