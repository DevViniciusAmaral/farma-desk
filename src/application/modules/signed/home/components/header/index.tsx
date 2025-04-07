import { ActivityIndicator, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "../../../../../components/text";
import { MapPin } from "lucide-react-native";
import { Button } from "../../../../../components/button";

interface HeaderProps {
  address: string;
  isLoadingAddress: boolean;
  handleUpdateAddress: () => void;
}

export const Header = ({
  address,
  isLoadingAddress,
  handleUpdateAddress,
}: HeaderProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text size={28} font="semibold">
          Olá, João
        </Text>

        <View style={styles.pointContainer}>
          <Text size={16} font="semibold" style={styles.pointText}>
            560 pontos
          </Text>
        </View>
      </View>

      <View style={styles.addressContainer}>
        <View style={styles.addressContent}>
          <MapPin size={24} color={theme.colors.secondary.default} />
          <Text
            style={styles.addressText}
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {address}
          </Text>
        </View>

        <Button style={styles.addressButton} onPress={handleUpdateAddress}>
          {isLoadingAddress ? (
            <ActivityIndicator
              size="small"
              color={theme.colors.primary.default}
            />
          ) : (
            <Text style={styles.addressTextButton}>Alterar</Text>
          )}
        </Button>
      </View>
    </View>
  );
};
