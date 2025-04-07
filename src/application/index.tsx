import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainNavigator } from "./routes";
import { ToastProvider } from "react-native-toast-notifications";
import { SafeAreaView } from "react-native-safe-area-context";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <MainNavigator />
        </SafeAreaView>
      </ToastProvider>
    </QueryClientProvider>
  );
};
