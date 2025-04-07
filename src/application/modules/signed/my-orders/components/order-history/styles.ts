import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {},

  list: {
    marginTop: 10,
    gap: 16,
    paddingBottom: 160,
  },

  card: {
    borderWidth: 1,
    borderColor: `${theme.colors.text}12`,
    padding: 20,
    borderRadius: 8,
  },

  headerCard: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerDetailsCard: {
    flex: 1,
  },

  pharmacyAddress: {
    color: `${theme.colors.text}60`,
  },

  footerCard: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },

  productContent: {
    flex: 1,
  },

  productImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: theme.colors.primary.light,
  },

  productDescription: {
    color: `${theme.colors.text}50`,
  },

  productPrice: {
    color: theme.colors.secondary.default,
  },
}));
