import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Layout } from "./components/layout";
import { Text } from "./components/text";

export const Home = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <Layout>
      <Text style={styles.text}>Home</Text>
    </Layout>
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
