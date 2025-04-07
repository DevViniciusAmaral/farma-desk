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
import { productList } from "../../../constants/ProductList";

export const Cart = ({ navigation }: MainRootProps<"Cart">) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Layout
      style={styles.container}
      header={
        <Header
          product={productList.at(0)}
          handleNavigate={() => navigation.navigate("PaymentMethod")}
        />
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
        {productList.map((product, index) => (
          <View key={index}>
            <View style={styles.productCard}>
              <Image
                source={{ uri: product.photoURL }}
                style={styles.productImage}
              />
              <View style={styles.productDetails}>
                <Text size={18} font="semibold">
                  {product.name}
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

            {index < productList.length - 1 && <Divider />}
          </View>
        ))}
      </ScrollView>
    </Layout>
  );
};
