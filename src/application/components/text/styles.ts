import { PixelRatio } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  text: (size: number, fontFamily: string) => ({
    fontFamily,
    color: theme.colors.text,
    fontSize: PixelRatio.getFontScale() * size,
  }),
}));
