import { Link } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { useAuth  } from "@clerk/clerk-expo";

export default function Index() {
  const {signOut} = useAuth();

  return (
    <View
      style={styles.container}>
      <Text style={styles.title}>Hell on earth</Text>

      <Link href={"/notifications"}> Feed screen in tabs</Link>
      <Image
        source={{uri: "https://www.oxleynursery.com.au/wp-content/uploads/2018/03/nepenthes-003.jpg"}}
        style={{width: 200, height: 200, resizeMode: "cover", marginBottom: 20}}
        accessibilityLabel="App Icon" // Add a descriptive label
        
      />
      <TouchableOpacity onPress={() => signOut()}>
        <Text style={{ color: "white"}}>Sign out</Text>
      </TouchableOpacity> 
      <TouchableOpacity onPress={() => alert("you touched")}>
        <Text>Press me</Text>
      </TouchableOpacity>
        
      <Pressable
        onPress={() => alert("you touched")}>
        <Text>Press me - pressable</Text>
      </Pressable>
    </View>
  );
}

