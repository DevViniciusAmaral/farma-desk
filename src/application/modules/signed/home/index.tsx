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
import { useEffect, useMemo, useState } from "react";
import { useGeocoding } from "../../../hooks/useGeocoding";
import { useMutation, useQuery } from "@tanstack/react-query";
import { storage } from "../../../../insfrastructure/storage";

export const Home = ({ navigation }: MainRootProps<"Home">) => {
  const { styles } = useStyles(stylesheet);
  const { getCoordinates, geocoding } = useGeocoding();

  const getCoordinatesMutation = useMutation({
    mutationKey: ["getCoordinates"],
    mutationFn: getCoordinates,
  });

  const getAddressMutation = useMutation({
    mutationKey: ["getGeocoding"],
    mutationFn: (data: any) => geocoding(data),
  });

  const isLoadingAddress =
    getCoordinatesMutation.isPending ?? getAddressMutation.isPending;

  const [address, setAddress] = useState("Sua localização");

  const pharmacyFormattedList = useMemo(
    () => pharmacyList.splice(0, 3),
    [pharmacyList]
  );

  const pharmacyImageList = useMemo(
    () => pharmacyFormattedList.map((item) => item.photoURL),
    [pharmacyFormattedList]
  );

  const handleGetAddres = async () => {
    try {
      setAddress("Buscando sua localização");
      const coords = await getCoordinatesMutation.mutateAsync();
      const address = await getAddressMutation.mutateAsync(coords);
      storage.set("address", address);
      setAddress(address);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const address = storage.getString("address");
    if (address) setAddress(address);
    else handleGetAddres();
  }, []);

  return (
    <Layout
      scrollEnabled
      contentContainerStyle={styles.container}
      header={
        <Header
          address={address}
          isLoadingAddress={isLoadingAddress}
          handleUpdateAddress={handleGetAddres}
        />
      }
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
        handleSelect={(id) => navigation.navigate("Store", { id })}
        style={{ marginTop: 26 }}
      />
    </Layout>
  );
};
