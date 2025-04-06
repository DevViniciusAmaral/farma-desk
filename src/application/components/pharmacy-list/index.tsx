import { View, ViewProps } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { PharmacyCard } from "../pharmacy-card";
import { Divider } from "../divider";
import { Text } from "../text";

interface PharmacyListProps extends ViewProps {
  title: string;
  data: any[];
  handleSelect?: () => void;
}

export const PharmacyList = ({
  title,
  data,
  style,
  handleSelect,
  ...rest
}: PharmacyListProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View {...rest} style={[styles.container, style]}>
      <Text size={24} font="semibold">
        {title}
      </Text>

      <View>
        {data.map((_, index) => (
          <View key={index} style={styles.button}>
            <PharmacyCard onPress={handleSelect} />
            {index < data.length - 1 && <Divider />}
          </View>
        ))}
      </View>
    </View>
  );
};
