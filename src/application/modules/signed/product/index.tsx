import { View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "../../../components/layout";
import { Button } from "../../../components/button";
import { ChevronLeft, CircleHelp } from "lucide-react-native";
import { ImageSlider } from "../../../components/image-slider";
import { Text } from "../../../components/text";
import { PrimaryButton } from "../../../components/primary-button";
import { PharmacyList } from "../../../components/pharmacy-list";
import { AvailablePharmacyCard } from "./components/available-pharmacy-card";
import { MainRootProps } from "../../../routes/MainRootProps";

export const Product = ({ route, navigation }: MainRootProps<"Product">) => {
  const productId = route.params?.id;
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Layout
      scrollEnabled
      contentContainerStyle={styles.container}
      header={
        <View style={styles.header}>
          <Button onPress={navigation.goBack}>
            <ChevronLeft size={24} color={theme.colors.text} />
          </Button>

          <Button>
            <CircleHelp size={24} color={theme.colors.text} />
          </Button>
        </View>
      }
    >
      <ImageSlider data={["", "", ""]} />

      <View style={styles.infoDetails}>
        <Text size={24} font="semibold">
          Benegrip Multi Caixa com 20 comprimidos 20mg
        </Text>

        <View style={styles.priceContent}>
          <Text size={28} font="semibold" style={styles.price(true)}>
            R$ 38,00
          </Text>
          <Text size={28} font="semibold">
            {" "}
            ou{" "}
          </Text>
          <Text size={28} font="semibold" style={styles.price(false)}>
            120 pontos
          </Text>
        </View>
      </View>

      <PrimaryButton>Comprar agora</PrimaryButton>

      <View style={styles.buttonsContainer}>
        <PrimaryButton mode="secondary" style={styles.button}>
          Salvar
        </PrimaryButton>
        <PrimaryButton disabled style={styles.button}>
          Compartilhar
        </PrimaryButton>
      </View>

      <AvailablePharmacyCard />

      <PharmacyList
        title="Parecidos com esse"
        data={["", "", ""]}
        style={styles.pharmacyList}
      />
    </Layout>
  );
};
