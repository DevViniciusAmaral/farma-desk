import { TouchableOpacityProps } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Button } from "../button";
import { Text, TextProps } from "../text";

interface PrimaryButtonProps extends TouchableOpacityProps {
  mode?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  light?: boolean;
  textProps?: TextProps;
}

export const PrimaryButton = ({
  mode = "primary",
  disabled = false,
  children,
  style,
  textProps,
  light,
  ...rest
}: PrimaryButtonProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const defaultColors = {
    primary: theme.colors.secondary.default,
    secondary: theme.colors.tertiary.default,
    tertiary: theme.colors.text,
  };

  const lightColors = {
    primary: theme.colors.secondary.light,
    secondary: theme.colors.tertiary.light,
    tertiary: theme.colors.text,
  };

  const bgColor = disabled
    ? theme.colors.primary.light
    : light
    ? lightColors[mode]
    : defaultColors[mode];

  const textColor = disabled
    ? theme.colors.primary.dark
    : light && mode !== "tertiary"
    ? defaultColors[mode]
    : theme.colors.primary.default;

  return (
    <Button {...rest} style={[styles.container(bgColor), style]}>
      <Text
        size={16}
        font="semibold"
        {...textProps}
        style={[styles.text(textColor), textProps?.style]}
      >
        {children}
      </Text>
    </Button>
  );
};
