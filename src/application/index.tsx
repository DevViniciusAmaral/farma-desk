import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainNavigator } from "./routes";
import { ToastProvider } from "react-native-toast-notifications";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <MainNavigator />
      </ToastProvider>
    </QueryClientProvider>
  );
};
