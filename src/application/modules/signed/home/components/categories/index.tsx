import { ImageBackground, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { categories } from "../../constants/Categories";
import { Text } from "../../../../../components/text";

export const Categories = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      {categories.map(({ label, photoURL }) => (
        <ImageBackground
          key={label}
          source={{ uri: photoURL }}
          style={styles.image}
          imageStyle={styles.image}
        >
          <View style={styles.overlay} />
          <Text>{label}</Text>
        </ImageBackground>
      ))}
    </View>
  );
};
