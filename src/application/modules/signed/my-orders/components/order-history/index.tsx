import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Image, ScrollView, View } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { Text } from "../../../../../components/text";
import { Divider } from "../../../../../components/divider";
import { IOrder } from "../../../../../models/IOrder";

interface OrderHistoryProps {
  data: IOrder[];
}

export const OrderHistory = ({ data }: OrderHistoryProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View>
      <Text size={24} font="semibold">
        Histórico
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {data.map((order, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.headerCard}>
              <View style={styles.headerDetailsCard}>
                <Text size={18} font="semibold">
                  {order.pharmacy.name}
                </Text>
                <Text style={styles.pharmacyAddress}>
                  {order.pharmacy.address}
                </Text>
              </View>

              <ChevronRight size={24} color={theme.colors.text} />
            </View>

            <Divider />

            <View style={styles.footerCard}>
              <Image
                source={{ uri: order.products?.[index]?.photoURL }}
                style={styles.productImage}
              />

              <View style={styles.productContent}>
                <Text size={18} font="semibold">
                  {order.products?.[index]?.name}
                </Text>
                <Text style={styles.productDescription}>
                  Caixa com 20 comprimidos 20mg
                </Text>
                <Text size={20} font="semibold" style={styles.productPrice}>
                  R$ 38,00
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
