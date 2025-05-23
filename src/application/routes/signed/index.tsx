import { createStackNavigator } from "@react-navigation/stack";
import { SignedParamList } from "./SignedParamList";
import { BottomTabsNavigator } from "./bottom-tabs";
import { Store } from "../../modules/signed/store";
import { Product } from "../../modules/signed/product";
import { OrderDetails } from "../../modules/signed/order-details";
import { PaymentMethod } from "../../modules/signed/payment-method";

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
      <Screen name="Product" component={Product} />
      <Screen name="OrderDetails" component={OrderDetails} />
      <Screen name="PaymentMethod" component={PaymentMethod} />
    </Navigator>
  );
};
