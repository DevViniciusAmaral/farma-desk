import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../../modules/signed/home";
import { BottomTabsParamList } from "./BottomTabsParamList";

const { Navigator, Screen } = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabsNavigator = () => {
  return (
    <Navigator options={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
