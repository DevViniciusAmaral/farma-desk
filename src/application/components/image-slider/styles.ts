import { Dimensions } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.primary.default,
  },

  list: {
    backgroundColor: theme.colors.primary.default,
  },

  imageContainer: {
    height: 231,
    borderRadius: 16,
    backgroundColor: theme.colors.primary.light,
  },

  image: {
    width: Dimensions.get("window").width - 40,
    height: 231,
    borderRadius: 16,
    backgroundColor: theme.colors.primary.default,
  },

  circleContainer: {
    position: "absolute",
    bottom: 8,
    padding: 4,
    borderRadius: 100,
    flexDirection: "row",
    gap: 6,
    minWidth: 80,
    backgroundColor: theme.colors.primary.default,
  },

  circle: (isActive: boolean) => ({
    width: isActive ? 36 : 12,
    height: 12,
    borderRadius: 100,
    backgroundColor: isActive
      ? theme.colors.secondary.default
      : theme.colors.primary.light,
  }),
}));
