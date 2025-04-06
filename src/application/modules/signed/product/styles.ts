import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },

  infoDetails: {
    marginTop: 13,
    marginBottom: 22,
  },

  priceContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  price: (secondary: boolean) => ({
    color: secondary
      ? theme.colors.secondary.default
      : theme.colors.tertiary.default,
  }),

  buttonsContainer: {
    flexDirection: "row",
    gap: 14,
    marginTop: 14,
    marginBottom: 29,
  },

  button: {
    flex: 1,
  },

  pharmacyList: {
    marginTop: 37,
    paddingBottom: 16,
  },
}));
