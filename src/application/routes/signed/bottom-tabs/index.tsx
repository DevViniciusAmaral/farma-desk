import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../../modules/signed/home";
import { BottomTabsParamList } from "./BottomTabsParamList";
import { BottomMenu } from "../../../components/bottom-menu";

const { Navigator, Screen } = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabsNavigator = () => {
  return (
    <Navigator
      id={undefined}
      tabBar={(props) => <BottomMenu {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
