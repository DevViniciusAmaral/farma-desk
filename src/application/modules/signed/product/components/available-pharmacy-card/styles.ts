import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: theme.colors.info.light,
    borderRadius: 100,
    gap: 8,
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

  card: {
    gap: 11,
    padding: 16,
    marginTop: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.primary.light,
  },

  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 19,
  },

  image: {
    width: 58,
    height: 58,
    borderRadius: 100,
    backgroundColor: theme.colors.primary.light,
  },

  description: {
    color: `${theme.colors.text}70`,
  },
}));
