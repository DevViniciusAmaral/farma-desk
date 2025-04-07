import { MainNavigator } from "./routes";
import { ToastProvider } from "react-native-toast-notifications";

export const App = () => {
  return (
    <ToastProvider>
      <MainNavigator />
    </ToastProvider>
  );
};
