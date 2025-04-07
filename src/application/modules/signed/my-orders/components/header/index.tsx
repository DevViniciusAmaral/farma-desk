import { Dimensions, Image, ScrollView, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "../../../../../components/text";
import { Divider } from "../../../../../components/divider";
import { PrimaryButton } from "../../../../../components/primary-button";
import { useRef, useState } from "react";
import { Button } from "../../../../../components/button";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { IProduct } from "../../../../../models/IProduct";
import { orderList } from "../../../../../constants/OrderList";

const orders = orderList.splice(0, 3);

interface HeaderProps {
  product: IProduct;
  handleDetails: (id: any) => void;
}

export const Header = ({ product, handleDetails }: HeaderProps) => {
  const { styles } = useStyles(stylesheet);

  const listRef = useRef<ScrollView>(null);
  const [indexList, setIndexList] = useState(0);
  const screenWidth = Dimensions.get("window").width - 40;

  const handleScrollList = (index: number) => {
    setIndexList(index);
    listRef.current?.scrollTo({ x: index * screenWidth, animated: true });
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / screenWidth);
    setIndexList(index);
  };

  return (
    <View style={styles.container}>
      <Text size={24} font="semibold" style={styles.title}>
        Meus pedidos
      </Text>

      <ScrollView
        ref={listRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.cardListStyle}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {orders.map((order, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle()}>Previsão de Entrega</Text>

            <Text size={18} font="semibold">
              {new Date().getDate()} de{" "}
              {format(new Date(), "MMMM, EEEE", { locale: ptBR })}
            </Text>

            <Text style={styles.cardTitle(true)}>
              Entrega feita por: Correios
            </Text>

            <Divider />

            <View style={styles.cardContent}>
              <View>
                <Text style={styles.cardTitle()}>Você comprou</Text>

                <Text size={18} font="semibold">
                  {product.name}
                </Text>

                <Text style={styles.cardTitle()}>
                  Caixa com 20 comprimidos 20mg
                </Text>
              </View>

              <Image
                source={{ uri: product.photoURL }}
                style={styles.cardImage}
              />
            </View>

            <View style={styles.cardFooter}>
              <PrimaryButton
                mode="secondary"
                style={styles.cardPrimaryButton}
                onPress={() => handleDetails("1")}
              >
                Acompanhar
              </PrimaryButton>

              <PrimaryButton light style={styles.cardSecondaryButton}>
                Detalhes
              </PrimaryButton>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.indicator}>
        {orders.map((_, index) => {
          const isActive = index === indexList;
          return (
            <Button
              key={index}
              style={styles.indicatorCircle(isActive)}
              onPress={() => handleScrollList(index)}
            />
          );
        })}
      </View>
    </View>
  );
};
