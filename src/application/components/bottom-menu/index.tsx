import { View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import {
  Home,
  ShoppingCart,
  SquareUserIcon,
  WalletCards,
} from "lucide-react-native";
import { Button } from "../button";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src";
import { BlurView } from "@react-native-community/blur";

export const BottomMenu = ({ state, navigation }: BottomTabBarProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const menuList = [
    { name: "Home", icon: Home },
    { name: "Cart", icon: ShoppingCart },
    { name: "MyOrders", icon: WalletCards },
    { name: "MyAccount", icon: SquareUserIcon },
  ];

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        {menuList.map(({ name, icon: Icon }, index) => {
          const isActive = state.index === index;
          const color = isActive
            ? theme.colors.primary.default
            : theme.colors.primary.dark;
          return (
            <Button
              key={name}
              style={styles.button(isActive)}
              onPress={() => navigation.navigate(name)}
            >
              <Icon size={24} color={color} />
            </Button>
          );
        })}
      </View>
    </View>
  );
};
