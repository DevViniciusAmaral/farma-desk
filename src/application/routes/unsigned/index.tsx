import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../../modules/unsigned/signin";

const { Navigator, Screen } = createStackNavigator();

export const UnsignedNavigator = () => {
  return (
    <Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};
