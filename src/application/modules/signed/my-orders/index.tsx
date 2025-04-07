import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "../../../components/layout";
import { StatusBar } from "expo-status-bar";
import { Header } from "./components/header";
import { OrderHistory } from "./components/order-history";
import { MainRootProps } from "../../../routes/MainRootProps";

export const MyOrders = ({ navigation }: MainRootProps<"MyOrders">) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Layout
      style={styles.container}
      header={
        <Header
          handleDetails={(id) => navigation.navigate("OrderDetails", { id })}
        />
      }
      statusBar={{ style: "light", color: theme.colors.secondary.default }}
    >
      <OrderHistory data={[1, 2, 3, 4, 5]} />
    </Layout>
  );
};
