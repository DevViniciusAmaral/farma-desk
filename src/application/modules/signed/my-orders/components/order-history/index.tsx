import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Image, ScrollView, View } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { Text } from "../../../../../components/text";
import { Divider } from "../../../../../components/divider";

interface OrderHistoryProps {
  data: any[];
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
        {data.map((_, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.headerCard}>
              <View style={styles.headerDetailsCard}>
                <Text size={18} font="semibold">
                  Ultra Farma
                </Text>
                <Text style={styles.pharmacyAddress}>
                  Rua Dutra, Centro, São Paulo
                </Text>
              </View>

              <ChevronRight size={24} color={theme.colors.text} />
            </View>

            <Divider />

            <View style={styles.footerCard}>
              <Image style={styles.productImage} />

              <View>
                <Text size={18} font="semibold">
                  Benegrip Multi
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
