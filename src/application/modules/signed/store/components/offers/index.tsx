import { Image, ScrollView, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "../../../../../components/text";
import { storeList } from "../../../../../constants/StoreList";

export const Offers = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text size={24} font="semibold" style={styles.title}>
        Ofertas
      </Text>

      <ScrollView
        horizontal
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
      >
        {storeList.map((store, index) => (
          <View key={index} style={styles.storeContainer}>
            <Image style={styles.storeImage} />
            <Text size={16} style={styles.storeName}>
              {store}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
