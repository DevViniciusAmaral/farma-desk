import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "../../../components/layout";

export const Home = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <Layout style={styles.container}>
      <></>
    </Layout>
  );
};
