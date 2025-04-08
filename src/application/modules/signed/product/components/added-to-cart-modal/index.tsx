import { View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { ShoppingCart } from "lucide-react-native";
import Modal, { ModalProps } from "react-native-modal";
import { Text } from "../../../../../components/text";
import { PrimaryButton } from "../../../../../components/primary-button";

interface AddedToCartModalProps extends Partial<ModalProps> {
  handleNavigateToCart: () => void;
  onClose: () => void;
}

export const AddedToCartModal = ({
  onClose,
  handleNavigateToCart,
  ...rest
}: AddedToCartModalProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Modal
      {...rest}
      onBackdropPress={onClose}
      animationIn="zoomIn"
      animationOut="zoomOut"
    >
      <View style={styles.container}>
        <View style={styles.cartIcon}>
          <ShoppingCart size={40} color={theme.colors.primary.default} />
        </View>

        <Text size={24} font="semibold" style={styles.text}>
          Adicionado ao carrinho!
        </Text>
        <Text style={styles.description}>
          Para finalizar o pedido vá para o carrinho.{" "}
        </Text>

        <View style={styles.buttonsContainer}>
          <PrimaryButton
            light
            mode="secondary"
            style={styles.button}
            onPress={onClose}
          >
            Talvez depois
          </PrimaryButton>

          <PrimaryButton style={styles.button} onPress={handleNavigateToCart}>
            Ver carrinho
          </PrimaryButton>
        </View>
      </View>
    </Modal>
  );
};
