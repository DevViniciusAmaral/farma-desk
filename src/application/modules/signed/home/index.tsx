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
import { useGeocoding } from "../../../hooks/useGeocoding";
import { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

export const Home = ({ navigation }: MainRootProps<"Home">) => {
  const { styles } = useStyles(stylesheet);
  const { getCoordinates, geocoding } = useGeocoding();

  const { data: coords } = useQuery({
    queryKey: ["getCoordinates"],
    queryFn: getCoordinates,
  });

  const { data: address } = useQuery({
    enabled: !!coords,
    queryKey: ["getGeocoding"],
    queryFn: () => {
      const { latitude, longitude } = coords;
      return geocoding(latitude, longitude);
    },
  });

  const pharmacyFormattedList = useMemo(
    () => pharmacyList.splice(0, 3),
    [pharmacyList]
  );

  const pharmacyImageList = useMemo(
    () => pharmacyFormattedList.map((item) => item.photoURL),
    [pharmacyFormattedList]
  );

  return (
    <Layout
      scrollEnabled
      contentContainerStyle={styles.container}
      header={<Header address={address} />}
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
