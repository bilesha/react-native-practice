import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/auth.styles";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSSO } from "@clerk/clerk-expo"
import { useRouter } from "expo-router"; // Adjust the import path as needed
// brandImage: { width: 100, height: 100, resizeMode: 'contain', marginVertical: 16 }


export default function Login() {
  
  const { startSSOFlow } = useSSO();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy: "oauth_google" });
      
      if (setActive && createdSessionId) {
        setActive({session:createdSessionId});
        router.push("/(tabs)");
      }
    } catch (error) {
      console.error("Google Sign In Error:", error);
    }
  };

  return (
    <View style={styles.container}>

        {/* BRAND SECTION */}
        <View style={styles.brandSection}>
          <View style={styles.logoContainer}>
            <Ionicons name="leaf" size={32} color={COLORS.primary} />
          </View>
          <Text style={styles.appName}>spotlight</Text>
          <Text style={styles.tagline}>don't miss anything</Text>

          <Image
          source={require('../../assets/images/strelitzia plant-bro.png')}
          style={styles.illustration} // Use a named style
          accessibilityLabel="App Icon"
          resizeMode="cover"
        />

        </View>
        <View style={styles.loginSection}>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleSignIn}
            activeOpacity={0.9}
          >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
            </View>
            <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
              By continueing, you agree to our Terms and Privacy Policy
            </Text>
          </View>
        </View>
  );
}