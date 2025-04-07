import { Dimensions } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingTop: 25,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.secondary.default,
    height: 240,
    marginBottom: 170,
  },

  title: {
    color: theme.colors.primary.default,
  },

  cardListStyle: {
    minHeight: 295,
    width: Dimensions.get("window").width - 40,
  },

  card: {
    width: Dimensions.get("window").width - 40,
    marginTop: 13,
    borderRadius: 8,
    backgroundColor: theme.colors.primary.default,
    padding: 20,
    borderWidth: 1,
    borderColor: `${theme.colors.text}12`,
  },

  cardTitle: (secondary?: boolean) => ({
    color: secondary ? theme.colors.tertiary.default : `${theme.colors.text}50`,
  }),

  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },

  cardImage: {
    width: 42,
    height: 42,
    borderRadius: 6,
    backgroundColor: theme.colors.primary.light,
  },

  cardFooter: {
    flexDirection: "row",
    gap: 16,
    marginTop: 16,
  },

  cardPrimaryButton: {
    flex: 1,
  },

  cardSecondaryButton: {
    width: 120,
  },

  indicator: {
    borderRadius: 100,
    padding: 4,
    backgroundColor: theme.colors.secondary.default,
    flexDirection: "row",
    gap: 8,
    alignSelf: "center",
    marginTop: 13,
  },

  indicatorCircle: (isActive: boolean) => ({
    width: isActive ? 36 : 12,
    height: 12,
    padding: 0,
    borderRadius: 100,
    backgroundColor: isActive
      ? theme.colors.primary.default
      : theme.colors.primary.light,
  }),
}));
