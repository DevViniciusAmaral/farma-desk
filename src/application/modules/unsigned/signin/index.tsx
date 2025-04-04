import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "../../../components/layout";
import { Text } from "../../../components/text";

export const SignIn = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <Layout style={styles.container}>
      <Text size={50} font="semibold">Sign In</Text>
    </Layout>
  );
};
