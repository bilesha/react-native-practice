import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import { tokenCache } from '../cache'; // Ensure this path is correct based on your project structure

// 1. Access the publishable key from the 'extra' config exposed by app.config.ts
//    This is the standard way to access environment variables in Expo at runtime.
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

// 2. Robust check for the publishable key during development.
//    This provides a clear error message if the key is missing,
//    preventing subtle bugs or crashes later.
if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key.\n\n' +
    'Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env file ' +
    'and ensure it\'s referenced in app.config.ts.\n\n' +
    'Refer to the Clerk Expo documentation for detailed setup instructions.'
  );
}

function RootLayoutNav() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <Slot />
    </ClerkProvider>
  )
}

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <Stack screenOptions={{ headerShown: false }}>
          {/* Screens will be added here in the future */}
        </Stack>
          </SafeAreaView>
        </SafeAreaProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
