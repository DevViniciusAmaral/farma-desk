import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: theme.colors.primary.default,
  },

  cartIcon: {
    padding: 27,
    borderRadius: 100,
    marginBottom: 15,
    backgroundColor: theme.colors.tertiary.default,
  },

  text: {
    textAlign: "center",
  },

  description: {
    color: `${theme.colors.text}60`,
  },

  buttonsContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: 20,
  },

  button: {
    flex: 1,
  },
}));
