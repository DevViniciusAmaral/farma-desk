import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "../../../components/layout";
import { Header } from "./components/header";
import { OrderHistory } from "./components/order-history";
import { MainRootProps } from "../../../routes/MainRootProps";
import { productList } from "../../../constants/ProductList";
import { orderList } from "../../../constants/OrderList";

export const MyOrders = ({ navigation }: MainRootProps<"MyOrders">) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Layout
      style={styles.container}
      header={
        <Header
          product={productList.at(0)}
          handleDetails={(id) => navigation.navigate("OrderDetails", { id })}
        />
      }
      statusBar={{ style: "light", color: theme.colors.secondary.default }}
    >
      <OrderHistory data={orderList} />
    </Layout>
  );
};
