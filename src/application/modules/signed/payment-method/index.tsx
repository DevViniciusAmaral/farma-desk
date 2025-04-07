import { View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "../../../components/layout";
import { Button } from "../../../components/button";
import { ChevronLeft, ClipboardCheck } from "lucide-react-native";
import { MainRootProps } from "../../../routes/MainRootProps";
import { Text } from "../../../components/text";
import QRCode from "react-native-qrcode-svg";
import * as Clipboard from "expo-clipboard";
import { useToast } from "react-native-toast-notifications";
import { PrimaryButton } from "../../../components/primary-button";

export const PaymentMethod = ({
  navigation,
}: MainRootProps<"PaymentMethod">) => {
  const toast = useToast();

  const { styles, theme } = useStyles(stylesheet);

  const copyToClipboard = async (value: string) => {
    await Clipboard.setStringAsync(value);
    toast.show("Código pix copiado para a área de transferência");
  };

  return (
    <Layout
      scrollEnabled
      contentContainerStyle={styles.container}
      header={
        <View style={styles.header}>
          <Button style={styles.backButton} onPress={navigation.goBack}>
            <ChevronLeft size={24} color={theme.colors.text} />
          </Button>
        </View>
      }
    >
      <View style={styles.card}>
        <View style={styles.horizontal}>
          <View>
            <Text style={styles.cardTitle}>Forma de Pagamento</Text>
            <Text size={18} font="semibold">
              Pix
            </Text>
          </View>

          <View style={styles.badge}>
            <Text size={16} font="semibold" style={styles.badgeText}>
              Alterar
            </Text>
          </View>
        </View>

        <View style={styles.qrCodeCard}>
          <QRCode
            size={145}
            value="5192 9356 4247 6133"
            logoBackgroundColor={theme.colors.primary.default}
          />
        </View>

        <View style={styles.codeContainer}>
          <View style={styles.codeContent}>
            <Text style={styles.cardTitle}>Código PIX</Text>
            <Text size={20} font="semibold">
              5192 9356 4247 6133
            </Text>
          </View>
          <Button
            style={styles.clipboardButton}
            onPress={() => copyToClipboard("5192 9356 4247 6133")}
          >
            <ClipboardCheck size={24} color={theme.colors.tertiary.default} />
          </Button>
        </View>

        <PrimaryButton light>Aguardando pagamento...</PrimaryButton>
      </View>

      <View style={styles.card}>
        <View style={styles.horizontal}>
          <View>
            <Text style={styles.cardTitle}>Forma de Pagamento</Text>
            <Text size={18} font="semibold">
              Pontos
            </Text>
          </View>

          <View style={styles.badge}>
            <Text size={16} font="semibold" style={styles.badgeText}>
              Alterar
            </Text>
          </View>
        </View>

        <View style={[styles.card, styles.vertical]}>
          <View>
            <Text style={styles.cardTitle}>Total em pontos</Text>
            <Text size={20} font="semibold" style={styles.cardSpan}>
              220 pontos
            </Text>
          </View>

          <View>
            <Text style={styles.cardTitle}>Seu saldo</Text>
            <Text size={20} font="semibold" style={styles.cardSpan}>
              560 pontos
            </Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <PrimaryButton light mode="secondary">
            Após a compra seu saldo será de: 340 pontos.
          </PrimaryButton>

          <PrimaryButton>Pagar com pontos</PrimaryButton>
        </View>
      </View>
    </Layout>
  );
};
