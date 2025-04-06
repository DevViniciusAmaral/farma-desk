import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "../../../../../components/text";
import { productList } from "../../../../../constants/ProductList";

export const MoreOrders = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text size={24} font="semibold">
        Mais pedidos
      </Text>

      <View style={styles.productList}>
        {productList.map((_, index) => (
          <View key={index} style={styles.productContainer}>
            <View style={styles.productContent}>
              <Image style={styles.productImage} />
              <View>
                <Text size={18} font="semibold">
                  Benegrip Multi
                </Text>

                <Text size={16} style={styles.productDescription}>
                  Caixa com 20 comprimidos 20mg
                </Text>

                <Text size={20} font="semibold" style={styles.productPrice}>
                  R$ 38,00
                </Text>
              </View>
            </View>

            {index < productList.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </View>
    </View>
  );
};
