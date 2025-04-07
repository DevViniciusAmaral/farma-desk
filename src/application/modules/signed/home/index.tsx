import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "../../../components/layout";
import { View } from "react-native";
import { Text } from "../../../components/text";
import { Highlights } from "./components/highlights";
import { Categories } from "./components/categories";
import { ImageSlider } from "../../../components/image-slider";
import { Header } from "./components/header";
import { MainRootProps } from "../../../routes/MainRootProps";
import { PharmacyList } from "../../../components/pharmacy-list";
import { pharmacyList } from "../../../constants/PharmacyList";

export const Home = ({ navigation }: MainRootProps<"Home">) => {
  const { styles } = useStyles(stylesheet);

  const pharmacyFormattedList = pharmacyList.splice(0, 3);
  const pharmacyImageList = pharmacyFormattedList.map((item) => item.photoURL);

  return (
    <Layout
      scrollEnabled
      contentContainerStyle={styles.container}
      header={<Header />}
    >
      <Highlights />

      <Categories />

      <View style={styles.vertical}>
        <Text size={24} font="semibold">
          Na vitrine
        </Text>
        <ImageSlider data={pharmacyImageList} />
      </View>

      <PharmacyList
        title="Perto de você"
        data={pharmacyFormattedList}
        handleSelect={() => navigation.navigate("Store")}
        style={{ marginTop: 26 }}
      />
    </Layout>
  );
};
