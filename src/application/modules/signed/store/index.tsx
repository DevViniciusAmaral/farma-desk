import { View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "../../../components/layout";
import { Header } from "./components/header";
import { SearchBar } from "../../../components/search-bar";
import { ImageSlider } from "../../../components/image-slider";
import { StoreDetails } from "./components/store-details";
import { Offers } from "./components/offers";
import { MoreOrders } from "./components/more-orders";
import { MainRootProps } from "../../../routes/MainRootProps";

export const Store = ({ navigation }: MainRootProps<"Store">) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Layout
      scrollEnabled
      contentContainerStyle={styles.container}
      header={<Header handleGoBack={navigation.goBack} />}
    >
      <StoreDetails />

      <View style={styles.content}>
        <SearchBar placeholder="Buscar medicamento" />
        <ImageSlider data={["", "", ""]} />
      </View>

      <Offers />

      <MoreOrders
        handleNavigate={() => navigation.navigate("Product", { id: "" })}
      />
    </Layout>
  );
};
