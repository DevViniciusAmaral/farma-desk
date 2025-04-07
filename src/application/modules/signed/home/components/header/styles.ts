import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: "100%",
    gap: 15,
    paddingHorizontal: 20,
    paddingTop: 23,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  pointContainer: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.tertiary.light,
  },

  pointText: {
    color: theme.colors.tertiary.default,
  },

  addressContainer: {
    borderRadius: 100,
    paddingVertical: 4,
    paddingRight: 4,
    paddingLeft: 10,
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.secondary.light,
  },

  addressContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  addressText: {
    flex: 1,
    color: theme.colors.secondary.default,
  },

  addressButton: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.secondary.default,
  },

  addressTextButton: {
    color: theme.colors.primary.default,
  },
}));
