import { ImageBackground, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "../../../../../components/text";

export const Highlights = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://www.inovafarma.com.br/blog/wp-content/uploads/2024/07/image-1-4.jpg",
        }}
        style={styles.image}
        imageStyle={styles.image}
      >
        <View style={styles.overlay} />
        <Text style={styles.text}>No preço</Text>
      </ImageBackground>

      <ImageBackground
        source={{
          uri: "https://cloudfront-us-east-1.images.arcpublishing.com/newr7/NGY72QMHRVJTVG5R2PLH7TVOZU.jpg",
        }}
        style={styles.image}
        imageStyle={styles.image}
      >
        <View style={styles.overlay} />
        <Text style={styles.text}>Perto de Você</Text>
      </ImageBackground>
    </View>
  );
};
