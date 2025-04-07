import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingHorizontal: 20,
  },

  productCard: {
    flexDirection: "row",
    gap: 20,
  },

  vertical: {
    flex: 1,
  },

  productList: {
    paddingTop: 16,
    paddingBottom: 120,
  },

  productImage: {
    width: 84,
    height: 84,
    borderRadius: 12,
    backgroundColor: theme.colors.primary.light,
  },

  productDescription: {
    color: theme.colors.primary.dark,
  },

  productPrice: {
    marginTop: 8,
    color: theme.colors.secondary.default,
  },

  addButton: {
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 100,
    backgroundColor: theme.colors.tertiary.light,
  },
}));
