import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 16,
    paddingHorizontal: 20,
  },

  productList: {
    gap: 16,
  },

  productContainer: {
    gap: 20,
  },

  productContent: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  productImage: {
    width: 84,
    height: 84,
    borderRadius: 12,
    backgroundColor: theme.colors.primary.light,
  },

  productDescription: {
    color: `${theme.colors.text}50`,
    marginTop: -3,
  },

  productPrice: {
    color: theme.colors.secondary.default,
  },

  divider: {
    borderWidth: 1,
    borderColor: `${theme.colors.text}10`,
  },
}));
