import { ScrollView, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "../../../components/layout";
import { Text } from "../../../components/text";
import {
  ArrowLeftRight,
  Bell,
  ChevronRight,
  CirclePercent,
  Cookie,
  Heart,
  Info,
  ShoppingBag,
  UserPen,
} from "lucide-react-native";
import { Button } from "../../../components/button";
import { Divider } from "../../../components/divider";

const cards = [
  {
    icon: CirclePercent,
    title: "Confira as Promoções ",
    buttonText: "Veja agora",
  },
  {
    icon: ArrowLeftRight,
    title: "Troque seus Pontos",
    buttonText: "Trocar agora",
  },
];

const menuList = [
  {
    icon: Bell,
    title: "Notificações",
    description: "Notificações que você recebeu",
  },
  {
    icon: ShoppingBag,
    title: "Histórico de compras",
    description: "Veja suas compras recentes",
  },
  {
    icon: Heart,
    title: "Salvos",
    description: "Acesse seus itens salvos",
  },
  {
    icon: UserPen,
    title: "Perfil",
    description: "Configure seu perfil",
  },
  {
    icon: Info,
    title: "Central de Ajuda",
    description: "Dúvidas frequentes",
  },
  {
    icon: Cookie,
    title: "Termos de Uso",
    description: "E politica de privacidade",
  },
];

export const MyAccount = () => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Layout
      scrollEnabled
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      header={
        <View style={styles.header}>
          <Text size={24} font="semibold">
            Minha conta
          </Text>
          <View style={styles.badge}>
            <Text size={16} font="semibold" style={styles.badgeText}>
              560 pontos
            </Text>
          </View>
        </View>
      }
    >
      <ScrollView
        horizontal
        style={styles.cardList}
        contentContainerStyle={styles.cardsContainer}
        showsHorizontalScrollIndicator={false}
      >
        {cards.map(({ icon: Icon, title, buttonText }, index) => {
          const isPrimary = index === 0;
          const iconColor = isPrimary
            ? theme.colors.secondary.default
            : theme.colors.tertiary.default;
          return (
            <View key={index} style={styles.card(isPrimary)}>
              <View style={styles.iconContainer}>
                <Icon size={24} color={iconColor} />
              </View>

              <Text size={24} font="semibold" style={styles.cardTitle}>
                {title}
              </Text>

              <Button style={styles.cardButton}>
                <Text size={16} style={styles.cardTextButton(isPrimary)}>
                  {buttonText}
                </Text>
              </Button>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.menuListContainer}>
        {menuList.map(({ icon: Icon, title, description }, index) => (
          <View key={index}>
            <View style={styles.menuCard}>
              <Icon size={24} color={theme.colors.text} />
              <View style={styles.menuContent}>
                <Text size={18} font="semibold">
                  {title}
                </Text>
                <Text size={16}>{description}</Text>
              </View>

              <ChevronRight size={24} color={theme.colors.text} />
            </View>

            {index < menuList.length - 1 && <Divider />}
          </View>
        ))}
      </View>
    </Layout>
  );
};
