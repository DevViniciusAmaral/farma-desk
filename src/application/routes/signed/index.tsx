import { createStackNavigator } from "@react-navigation/stack";
import { SignedParamList } from "./SignedParamList";
import { BottomTabsNavigator } from "./bottom-tabs";

const { Navigator, Screen } = createStackNavigator<SignedParamList>();

export const SignedNavigator = () => {
  return (
    <Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Screen name="BottomTabsNavigator" component={BottomTabsNavigator} />
    </Navigator>
  );
};
