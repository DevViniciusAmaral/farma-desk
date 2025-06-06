import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "../../../../../components/text";
import { productList } from "../../../../../constants/ProductList";
import { Button } from "../../../../../components/button";

interface MoreOrdersProps {
  handleNavigate: () => void;
}

export const MoreOrders = ({ handleNavigate }: MoreOrdersProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text size={24} font="semibold">
        Mais pedidos
      </Text>

      <View style={styles.productList}>
        {productList.map((product, index) => (
          <Button
            key={index}
            style={styles.productContainer}
            onPress={handleNavigate}
          >
            <View style={styles.productContent}>
              <Image
                source={{ uri: product.photoURL }}
                style={styles.productImage}
              />
              <View style={{ flex: 1 }}>
                <Text size={18} font="semibold">
                  {product.name}
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
          </Button>
        ))}
      </View>
    </View>
  );
};
