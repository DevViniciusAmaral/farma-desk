import { Image, TouchableOpacityProps, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "../text";
import { Button } from "../button";
import { IPharmacy } from "../../models/IPharmacy";

interface PharmacyCardProps extends TouchableOpacityProps {
  data: IPharmacy;
}

export const PharmacyCard = ({ data, style, ...rest }: PharmacyCardProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Button {...rest} style={[styles.container, style]}>
      <Image source={{ uri: data.photoURL }} style={styles.image} />

      <View style={styles.content}>
        <Text size={18} font="semibold">
          {data.name}
        </Text>
        <Text style={styles.description}>{data.address}</Text>
        <View style={styles.distanceContent}>
          <Text size={12} font="semibold" style={styles.distanceText}>
            {data.distance}
          </Text>
        </View>
      </View>
    </Button>
  );
};
