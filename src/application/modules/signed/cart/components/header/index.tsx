import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "../../../../../components/text";
import { PrimaryButton } from "../../../../../components/primary-button";
import { Button } from "../../../../../components/button";
import { Plus, Trash2 } from "lucide-react-native";
import { IProduct } from "../../../../../models/IProduct";

interface HeaderProps {
  product: IProduct;
  handleNavigate: () => void;
}

export const Header = ({ product, handleNavigate }: HeaderProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text size={24} font="semibold" style={styles.title}>
        Carrinho de compras
      </Text>

      <View style={styles.card}>
        <View style={styles.horizontal}>
          <View>
            <Text size={18} font="semibold">
              {product.name}
            </Text>
            <Text style={styles.cardDescription}>
              Caixa com 20 comprimidos 20mg
            </Text>
          </View>

          <Image
            source={{ uri: product.photoURL }}
            style={styles.productImage}
          />
        </View>

        <View>
          <Text style={styles.cardDescription}>Subtotal</Text>
          <View style={styles.horizontal}>
            <Text size={16} font="semibold">
              1 item
            </Text>
            <Text size={20} font="semibold" style={styles.productPrice}>
              R$ 38,00
            </Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <PrimaryButton light mode="secondary" style={styles.primaryButton}>
            Adicionar mais itens
          </PrimaryButton>

          <Button style={[styles.button, styles.trashButton]}>
            <Trash2 size={24} color={theme.colors.alert.default} />
          </Button>

          <Button style={[styles.button, styles.addButton]}>
            <Plus size={24} color={theme.colors.secondary.default} />
          </Button>
        </View>

        <PrimaryButton onPress={handleNavigate}>
          Continuar para o Pagamento
        </PrimaryButton>
      </View>
    </View>
  );
};
