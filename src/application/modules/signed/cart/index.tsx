import { Image, ScrollView, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "../../../components/layout";
import { Header } from "./components/header";
import { StatusBar } from "expo-status-bar";
import { Text } from "../../../components/text";
import { Divider } from "../../../components/divider";
import { Button } from "../../../components/button";
import { Plus } from "lucide-react-native";
import { MainRootProps } from "../../../routes/MainRootProps";

const products = [1, 2, 3, 4, 5];

export const Cart = ({ navigation }: MainRootProps<"Cart">) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Layout
      style={styles.container}
      header={
        <Header handleNavigate={() => navigation.navigate("PaymentMethod")} />
      }
      statusBar={{ style: "light", color: theme.colors.tertiary.default }}
    >
      <Text size={24} font="semibold">
        Peça também
      </Text>

      <ScrollView
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      >
        {products.map((_, index) => (
          <View key={index}>
            <View style={styles.productCard}>
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

              <Button style={styles.addButton}>
                <Plus size={24} color={theme.colors.tertiary.default} />
              </Button>
            </View>

            {index < products.length - 1 && <Divider />}
          </View>
        ))}
      </ScrollView>
    </Layout>
  );
};
