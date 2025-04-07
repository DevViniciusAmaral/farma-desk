import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    height: 240,
    backgroundColor: theme.colors.tertiary.default,
    padding: 20,
    gap: 13,
    marginBottom: 120,
  },

  title: {
    color: theme.colors.primary.default,
  },

  card: {
    borderWidth: 1,
    borderColor: `${theme.colors.text}20`,
    borderRadius: 8,
    backgroundColor: theme.colors.primary.default,
    padding: 16,
    gap: 11,
  },

  cardDescription: {
    color: theme.colors.primary.dark,
  },

  horizontal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },

  productImage: {
    width: 42,
    height: 42,
    borderRadius: 6,
    backgroundColor: theme.colors.primary.light,
  },

  productPrice: {
    color: theme.colors.secondary.default,
  },

  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },

  primaryButton: {
    flex: 1,
    height: 46,
    padding: 0,
  },

  button: {
    width: 46,
    height: 46,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  trashButton: {
    backgroundColor: theme.colors.alert.light,
  },

  addButton: {
    backgroundColor: theme.colors.secondary.light,
  },
}));
