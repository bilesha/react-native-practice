import ClerkAndConvexProviders from "@/providers/ClerkAndConvexProviders";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {SplashScreen} from "expo-router";
import {useFonts} from "expo-font";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
  if(fontsLoaded) await SplashScreen.hideAsync();
}, [fontsLoaded]);

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
