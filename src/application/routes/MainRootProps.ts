import { StackScreenProps } from "@react-navigation/stack";
import { UnsignedParamList } from "./unsigned/UnsignedParamList";
import { BottomTabsParamList } from "./signed/bottom-tabs/BottomTabsParamList";
import { SignedParamList } from "./signed/SignedParamList";

type ParamList = UnsignedParamList & SignedParamList & BottomTabsParamList;

export type MainRootProps<T extends keyof ParamList> = StackScreenProps<
  ParamList,
  T
>;
