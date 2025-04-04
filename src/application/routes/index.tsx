import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UnsignedNavigator } from "./unsigned";

export const MainNavigator = () => (
  <NavigationContainer>
    <UnsignedNavigator />
  </NavigationContainer>
);
