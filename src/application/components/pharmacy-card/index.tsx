import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "../text";

export const PharmacyCard = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Image style={styles.image} />

      <View>
        <Text size={18} font="semibold">Ultra Farma</Text>
        <Text style={styles.description}>Rua Dutra, Centro, São Paulo</Text>
        <View style={styles.distanceContent}>
            <Text size={12} font="semibold" style={styles.distanceText}>1.2 km</Text>
        </View>
      </View>
    </View>
  );
};
