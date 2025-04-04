import { StackScreenProps } from "@react-navigation/stack";
import { UnsignedParamList } from "./unsigned/UnsignedParamList";

export type MainRootProps<T extends keyof UnsignedParamList> = StackScreenProps<
  UnsignedParamList,
  T
>;
