import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../../modules/signed/home";
import { BottomTabsParamList } from "./BottomTabsParamList";
import { BottomMenu } from "../../../components/bottom-menu";
import { MyAccount } from "../../../modules/signed/my-account";
import { MyOrders } from "../../../modules/signed/my-orders";

const { Navigator, Screen } = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabsNavigator = () => {
  return (
    <Navigator
      id={undefined}
      tabBar={(props) => <BottomMenu {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Cart" component={Home} />
      <Screen name="MyOrders" component={MyOrders} />
      <Screen name="MyAccount" component={MyAccount} />
    </Navigator>
  );
};
