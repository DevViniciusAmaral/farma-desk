import { Image, TouchableOpacityProps, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "../text";
import { Button } from "../button";

export const PharmacyCard = ({ style, ...rest }: TouchableOpacityProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Button {...rest} style={[styles.container, style]}>
      <Image style={styles.image} />

      <View>
        <Text size={18} font="semibold">
          Ultra Farma
        </Text>
        <Text style={styles.description}>Rua Dutra, Centro, São Paulo</Text>
        <View style={styles.distanceContent}>
          <Text size={12} font="semibold" style={styles.distanceText}>
            1.2 km
          </Text>
        </View>
      </View>
    </Button>
  );
};
