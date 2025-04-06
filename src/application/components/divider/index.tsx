import { View, ViewProps } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";

interface DividerProps extends ViewProps {}

export const Divider = ({ style, ...rest }: DividerProps) => {
  const { styles } = useStyles(stylesheet);
  return <View {...rest} style={[styles.divider, style]} />;
};
