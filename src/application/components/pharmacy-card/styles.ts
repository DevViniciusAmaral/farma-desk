import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },

  content: {
    flex: 1,
  },

  image: {
    width: 84,
    height: 84,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: `${theme.colors.text}05`,
    backgroundColor: theme.colors.primary.light,
  },

  description: {
    marginTop: 3,
    marginBottom: 6,
    color: theme.colors.primary.dark,
  },

  distanceContent: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.tertiary.light,
    borderRadius: 100,
    alignSelf: "flex-start",
  },

  distanceText: {
    color: theme.colors.tertiary.default,
  },
}));
