import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { forwardRef } from "react";

export interface TextInputProps extends RNTextInputProps {
  size?: number;
  font?: "regular" | "semibold";
}

export const TextInput = forwardRef<any, TextInputProps>(
  ({ size = 14, font = "regular", style, ...rest }, ref) => {
    const { styles, theme } = useStyles(stylesheet);

    return (
      <RNTextInput
        {...rest}
        ref={ref}
        autoComplete="off"
        autoCorrect={false}
        autoCapitalize="none"
        style={[styles.textInput(size, font), style]}
        placeholderTextColor={theme.colors.primary.dark}
      />
    );
  }
);
