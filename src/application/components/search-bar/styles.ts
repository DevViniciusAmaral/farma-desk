import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: 16,
    backgroundColor: theme.colors.primary.light,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginTop: 21,
    marginBottom: 26,
  },

  input: {
    flex: 1,
  },
}));
