import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingHorizontal: 20,
    paddingTop: 23,
    paddingBottom: 116,
  },

  vertical: {
    gap: 8,
    marginTop: 26,
  },

  divider: {
    marginVertical: 16,
    borderWidth: 1,
    borderColor: `${theme.colors.text}10`,
  },
}));
