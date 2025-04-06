import { createStackNavigator } from "@react-navigation/stack";
import { SignedParamList } from "./SignedParamList";
import { BottomTabsNavigator } from "./bottom-tabs";
import { Store } from "../../modules/signed/store";

const { Navigator, Screen } = createStackNavigator<SignedParamList>();

export const SignedNavigator = () => {
  return (
    <Navigator
      id={undefined}
      initialRouteName="BottomTabsNavigator"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="BottomTabsNavigator" component={BottomTabsNavigator} />
      <Screen name="Store" component={Store} />
    </Navigator>
  );
};
