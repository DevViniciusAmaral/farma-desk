import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "../../../../../components/text";

export const StoreDetails = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View>
        <Text size={24} font="semibold">
          Farmácia Preço Popular
        </Text>
        <Text size={16} style={styles.text}>
          Aberta até 22h • Centro, PR
        </Text>
      </View>

      <Image style={styles.image} />
    </View>
  );
};
