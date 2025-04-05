import { TouchableOpacityProps, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Button } from "../button";
import { Text, TextProps } from "../text";

interface PrimaryButtonProps extends TouchableOpacityProps {
  mode?: "primary" | "secondary";
  disabled?: boolean;
  textProps?: TextProps;
}

export const PrimaryButton = ({
  mode = "primary",
  disabled = false,
  children,
  style,
  textProps,
  ...rest
}: PrimaryButtonProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const bgColor = disabled
    ? theme.colors.primary.light
    : {
        primary: theme.colors.secondary.default,
        secondary: theme.colors.tertiary.default,
      }[mode];

  const textColor = disabled
    ? theme.colors.primary.dark
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
