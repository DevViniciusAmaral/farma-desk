import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../../modules/unsigned/signin";
import { ConfirmEmail } from "../../modules/unsigned/confirm-email";

const { Navigator, Screen } = createStackNavigator();

export const UnsignedNavigator = () => {
  return (
    <Navigator
      id={undefined}
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="ConfirmEmail" component={ConfirmEmail} />
    </Navigator>
  );
};
