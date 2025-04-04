import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { forwardRef } from "react";

export interface TextProps extends RNTextProps {
  size?: number;
  font?: "regular" | "semibold";
}

export const Text = forwardRef<any, TextProps>(
  ({ size = 14, font = "regular", style, ...rest }, ref) => {
    const { styles, theme } = useStyles(stylesheet);

    const fontFamily = {
      regular: theme.fonts.regular,
      semibold: theme.fonts.semibold,
    }[font];

    return (
      <RNText {...rest} ref={ref} style={[styles.text(size, fontFamily), style]} />
    );
  }
);
