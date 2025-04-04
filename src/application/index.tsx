import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export const Home = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary.default,
  },
  text: {
    fontSize: 50,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.text,
  },
}));
