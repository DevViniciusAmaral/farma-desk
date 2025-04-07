import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  View,
} from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import {
  StatusBar,
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";

interface LayoutProps extends ScrollViewProps {
  header?: React.ReactNode;
  paddingTopEnabled?: boolean;
  footer?: React.ReactNode;
  statusBarColor?: string;
  statusBar?: { style: "light" | "dark"; color: string };
}

interface CustomStatusBar {
  style: "light" | "dark";
  color: string;
}

export const Layout = ({
  header,
  paddingTopEnabled = true,
  style,
  footer,
  scrollEnabled = false,
  statusBar,
  ...rest
}: LayoutProps) => {
  const { styles, theme } = useStyles(stylesheet);
  const { top } = useSafeAreaInsets();
  const paddingTop = paddingTopEnabled ? top : 0;

  const behavior = Platform.OS === "ios" ? "padding" : "height";

  const defaultStatusBar = {
    style: "dark",
    color: theme.colors.primary.default,
  } as const;
  const currentStatusBar = statusBar || defaultStatusBar;

  useFocusEffect(() => {
    setStatusBarStyle(currentStatusBar.style);
    setStatusBarBackgroundColor(currentStatusBar.color);
  });

  return (
    <KeyboardAvoidingView
      enabled
      behavior={behavior}
      style={styles.container(paddingTop)}
    >
      <StatusBar
        style={currentStatusBar.style}
        backgroundColor={currentStatusBar.color}
      />
      {header && <>{header}</>}

      {scrollEnabled ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={style}
          {...rest}
        />
      ) : (
        <View {...rest} style={[styles.content, style]} />
      )}

      {footer && <>{footer}</>}
    </KeyboardAvoidingView>
  );
};
