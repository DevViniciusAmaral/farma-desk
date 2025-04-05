import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UnsignedNavigator } from "./unsigned";
import { SignedNavigator } from "./signed";
import { useAuth } from "../hooks/useAuth";

export const MainNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <SignedNavigator /> : <UnsignedNavigator />}
    </NavigationContainer>
  );
};
