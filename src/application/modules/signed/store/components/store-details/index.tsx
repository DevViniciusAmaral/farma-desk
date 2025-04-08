import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "../../../../../components/text";
import { IPharmacy } from "../../../../../models/IPharmacy";

interface StoreDetailsProps {
  pharmacy: IPharmacy;
}

export const StoreDetails = ({ pharmacy }: StoreDetailsProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View>
        <Text size={24} font="semibold">
          {pharmacy.name}
        </Text>
        <Text size={16} style={styles.text}>
          Aberta até 22h • Centro, PR
        </Text>
      </View>

      <Image source={{ uri: pharmacy.photoURL }} style={styles.image} />
    </View>
  );
};
