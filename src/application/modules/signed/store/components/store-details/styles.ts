import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    paddingHorizontal: 20,
  },

  text: {
    color: `${theme.colors.text}70`,
  },

  image: {
    width: 58,
    height: 58,
    borderRadius: 100,
    backgroundColor: theme.colors.primary.light,
  },
}));
