import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../../modules/unsigned/signin";
import { ConfirmEmail } from "../../modules/unsigned/confirm-email";

const { Navigator, Screen } = createStackNavigator();

export const UnsignedNavigator = () => {
  return (
    <Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Screen name="ConfirmEmail" component={ConfirmEmail} />
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};
