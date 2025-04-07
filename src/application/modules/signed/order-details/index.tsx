import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "../../../components/layout";
import { MainRootProps } from "../../../routes/MainRootProps";
import { Button } from "../../../components/button";
import { ChevronLeft, CircleHelp, ClipboardCheck } from "lucide-react-native";
import { Text } from "../../../components/text";
import { PrimaryButton } from "../../../components/primary-button";
import * as Clipboard from "expo-clipboard";
import { useToast } from "react-native-toast-notifications";

export const OrderDetails = ({
  route,
  navigation,
}: MainRootProps<"OrderDetails">) => {
  const orderId = route.params?.id;
  const toast = useToast();

  const { styles, theme } = useStyles(stylesheet);

  const copyToClipboard = async (value: string) => {
    await Clipboard.setStringAsync(value);
    toast.show("Código copiado para a área de transferência");
  };

  return (
    <Layout
      scrollEnabled
      contentContainerStyle={styles.container}
      header={
        <View style={styles.header}>
          <Button onPress={navigation.goBack}>
            <ChevronLeft size={24} color={theme.colors.text} />
          </Button>

          <Text size={24} font="semibold">
            Detalhes
          </Text>

          <Button>
            <CircleHelp size={24} color={theme.colors.text} />
          </Button>
        </View>
      }
    >
      <View style={styles.card}>
        <View>
          <Text style={styles.cardTitle}>Previsão de Entrega</Text>
          <Text size={18} font="semibold">
            17 de Dezembro, Segunda-feira
          </Text>
          <Text style={styles.cardSpan()}>Entrega feita por: Correios</Text>
        </View>

        <View>
          <Text style={styles.cardTitle}>Endereço de Destino</Text>
          <Text size={18} font="semibold">
            Rua Dutra - 525, Centro, São Paulo
          </Text>
          <Text size={16} style={styles.cardSpan(true)}>
            AP 05 Subindo as escadas
          </Text>
        </View>

        <View>
          <Text style={styles.cardTitle}>Frete</Text>
          <Text size={18} font="semibold">
            R$ 12,90 - 4 DIAS ÚTEIS
          </Text>
        </View>

        <View style={styles.horizontal}>
          <View style={styles.codeContainer}>
            <Text style={styles.cardTitle}>Código de Rastreio</Text>
            <Text size={18} font="semibold">
              SL123456789BR
            </Text>
          </View>

          <Button
            style={styles.clipboardButton}
            onPress={() => copyToClipboard("SL123456789BR")}
          >
            <ClipboardCheck size={24} color={theme.colors.tertiary.default} />
          </Button>
        </View>

        <PrimaryButton mode="secondary">Rastrear</PrimaryButton>
      </View>

      <View style={styles.card}>
        <View>
          <Text style={styles.cardTitle}>Detalhes do Produto</Text>
          <View style={styles.horizontal}>
            <View style={styles.vertical}>
              <Text size={18} font="semibold">
                Benegrip Multi
              </Text>
              <Text style={styles.cardTitle}>
                Caixa com 20 comprimidos 20mg
              </Text>
            </View>

            <Image style={styles.cardImage} />
          </View>
        </View>

        <View>
          <Text style={styles.cardTitle}>Preço do produto</Text>
          <Text size={18} font="semibold">
            R$ 38,00
          </Text>
        </View>

        <View>
          <Text style={styles.cardTitle}>Forma de Pagamento</Text>
          <Text size={18} font="semibold">
            1 x Cartão de Crédito
          </Text>
        </View>

        <PrimaryButton>Comprar novamente</PrimaryButton>
      </View>
    </Layout>
  );
};
