import { View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Button } from "../../../../../components/button";
import { ChevronLeft, CircleHelp } from "lucide-react-native";
import { Text } from "../../../../../components/text";

interface HeaderProps {
  handleGoBack: () => void;
}

export const Header = ({ handleGoBack }: HeaderProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Button onPress={handleGoBack}>
        <ChevronLeft size={24} color={theme.colors.text} />
      </Button>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>Aberta agora</Text>

        <View style={styles.outsideCircle}>
          <View style={styles.innerCircle} />
        </View>
      </View>

      <Button>
        <CircleHelp size={24} color={theme.colors.text} />
      </Button>
    </View>
  );
};
