import ClerkAndConvexProviders from "@/providers/ClerkAndConvexProviders";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ClerkAndConvexProviders>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <Stack screenOptions={{ headerShown: false }}>
          {/* Screens will be added here in the future */}
        </Stack>
          </SafeAreaView>
        </SafeAreaProvider>
    </ClerkAndConvexProviders>
  );
}
