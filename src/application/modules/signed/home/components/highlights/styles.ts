import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    gap: 12,
  },

  image: {
    flex: 1,
    height: 90,
    borderRadius: 8,
    backgroundColor: theme.colors.primary.light,
  },

  text: {
    marginTop: 8,
    marginLeft: 8,
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: `${theme.colors.primary.default}20`,
  },
}));
