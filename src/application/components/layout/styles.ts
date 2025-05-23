import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: (paddingTop: number) => ({
    flex: 1,
    paddingTop,
    backgroundColor: theme.colors.primary.default,
  }),

  content: {
    flex: 1,
  },
}));
