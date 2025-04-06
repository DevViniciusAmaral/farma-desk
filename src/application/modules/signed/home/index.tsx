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

export const Home = ({ navigation }: MainRootProps<"Home">) => {
  const { styles } = useStyles(stylesheet);

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
        <ImageSlider data={["", "", ""]} />
      </View>

      <PharmacyList
        title="Perto de você"
        data={[1, 2, 3, 4, 5]}
        handleSelect={() => navigation.navigate("Store")}
        style={{ marginTop: 26 }}
      />
    </Layout>
  );
};
