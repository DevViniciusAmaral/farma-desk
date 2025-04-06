import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "../../../../../components/text";
import { PrimaryButton } from "../../../../../components/primary-button";

export const AvailablePharmacyCard = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View>
      <View style={styles.header}>
        <Text size={24} font="semibold">
          Disponível em
        </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Aberta agora</Text>
          <View style={styles.outsideCircle}>
            <View style={styles.innerCircle} />
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Image style={styles.image} />
          <View>
            <Text size={18} font="semibold">
              Farmácia Preço Popular
            </Text>
            <Text size={18} style={styles.description}>
              Aberta até 22h • Centro, PR
            </Text>
          </View>
        </View>

        <PrimaryButton light>Ver mais produtos</PrimaryButton>
      </View>
    </View>
  );
};
