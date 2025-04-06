import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  image: {
    flex: 1,
    minHeight: 231,
    padding: 10,
    borderRadius: 16,
    justifyContent: "flex-end",
    backgroundColor: theme.colors.primary.light,
  },

  circleContainer: {
    padding: 4,
    borderRadius: 100,
    flexDirection: "row",
    gap: 6,
    minWidth: 80,
    alignSelf: "center",
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
