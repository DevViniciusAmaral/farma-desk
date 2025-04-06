import { View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { TextInput, TextInputProps } from "../text-input";
import { Search } from "lucide-react-native";

export const SearchBar = ({ ...rest }: TextInputProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Search size={24} color={theme.colors.text} />

      <TextInput
        {...rest}
        size={18}
        font="semibold"
        style={styles.input}
        placeholderTextColor={theme.colors.text}
      />
    </View>
  );
};
