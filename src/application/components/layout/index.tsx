import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  View,
} from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface LayoutProps extends ScrollViewProps {
  header?: React.ReactNode;
  paddingTopEnabled?: boolean;
  footer?: React.ReactNode;
}

export const Layout = ({
  header,
  paddingTopEnabled = true,
  style,
  footer,
  scrollEnabled = false,
  ...rest
}: LayoutProps) => {
  const { styles, theme } = useStyles(stylesheet);
  const { top } = useSafeAreaInsets();
  const paddingTop = paddingTopEnabled ? top : 0;

  const behavior = Platform.OS === "ios" ? "padding" : "height";

  return (
    <KeyboardAvoidingView
      enabled
      behavior={behavior}
      style={styles.container(paddingTop)}
    >
      <StatusBar style="dark" backgroundColor={theme.colors.primary.default} />
      {header && <>{header}</>}

      {scrollEnabled ? (
        <ScrollView {...rest} style={style} />
      ) : (
        <View {...rest} style={[styles.content, style]} />
      )}

      {footer && <>{footer}</>}
    </KeyboardAvoidingView>
  );
};
