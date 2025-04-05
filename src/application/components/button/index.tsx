import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";

interface ButtonProps extends TouchableOpacityProps {}

export const Button = ({ style, ...rest }: ButtonProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={1}
      style={[styles.button, style]}
    />
  );
};
