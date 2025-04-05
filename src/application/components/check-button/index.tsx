import { TouchableOpacityProps, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Button } from "../button";
import { Text, TextProps } from "../text";
import { Check, Square, SquareCheck } from "lucide-react-native";

interface CheckButtonProps extends TouchableOpacityProps {
  checked?: boolean;
  textProps?: TextProps;
}

export const CheckButton = ({
  checked,
  children,
  textProps,
  style,
  ...rest
}: CheckButtonProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Button {...rest} style={[styles.container, style]}>
      <View style={styles.square(checked)}>
        {checked && <Check size={18} color={theme.colors.primary.default} />}
      </View>

      <Text {...textProps}>{children}</Text>
    </Button>
  );
};
