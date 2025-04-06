import { ImageBackground, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "../../../../../components/text";

export const Highlights = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image}>
        <Text>No preço</Text>
      </ImageBackground>

      <ImageBackground style={styles.image}>
        <Text>Perto de Você</Text>
      </ImageBackground>
    </View>
  );
};
