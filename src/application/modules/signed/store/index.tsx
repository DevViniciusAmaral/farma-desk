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
import { pharmacyList } from "../../../constants/PharmacyList";
import { productList } from "../../../constants/ProductList";

export const Store = ({ route, navigation }: MainRootProps<"Store">) => {
  const pharmacyId = route.params?.id;
  const { styles } = useStyles(stylesheet);

  const pharmacy = pharmacyList.at(0);

  return (
    <Layout
      scrollEnabled
      contentContainerStyle={styles.container}
      header={<Header handleGoBack={navigation.goBack} />}
    >
      <StoreDetails pharmacy={pharmacy} />

      <View style={styles.content}>
        <SearchBar placeholder="Buscar medicamento" />
        <ImageSlider data={productList.map((item) => item.photoURL)} />
      </View>

      <Offers />

      <MoreOrders
        handleNavigate={() => navigation.navigate("Product", { id: "" })}
      />
    </Layout>
  );
};
