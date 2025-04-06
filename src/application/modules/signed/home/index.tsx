import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "../../../components/layout";
import { View } from "react-native";
import { Text } from "../../../components/text";
import { Highlights } from "./components/highlights";
import { Categories } from "./components/categories";
import { ImageSlider } from "../../../components/image-slider";
import { Header } from "./components/header";
import { PharmacyCard } from "../../../components/pharmacy-card";
import { pharmacyList } from "../../../constants/PharmacyList";
import { Button } from "../../../components/button";

export const Home = () => {
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

      <View style={styles.vertical}>
        <Text size={28} font="semibold">
          Perto de você
        </Text>

        <View>
          {pharmacyList.map((_, index) => (
            <Button key={index}>
              <PharmacyCard />
              {index < pharmacyList.length - 1 && (
                <View style={styles.divider} />
              )}
            </Button>
          ))}
        </View>
      </View>
    </Layout>
  );
};
