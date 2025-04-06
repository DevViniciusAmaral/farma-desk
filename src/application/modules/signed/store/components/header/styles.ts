import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    marginTop: 3,
    paddingHorizontal: 20,
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.info.light,
    borderRadius: 100,
    gap: 16,
  },

  badgeText: {
    color: theme.colors.info.dark,
  },

  outsideCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.info.default,
  },

  innerCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.info.dark,
  },
}));
