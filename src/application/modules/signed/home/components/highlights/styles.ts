import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    gap: 12,
  },

  image: {
    flex: 1,
    height: 90,
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: theme.colors.primary.light,
  },
}));
