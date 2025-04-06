import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  divider: {
    borderWidth: 1,
    marginVertical: 16,
    borderColor: theme.colors.primary.light,
  },
}));
