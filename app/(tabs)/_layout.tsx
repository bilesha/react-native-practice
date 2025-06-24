import { COLORS } from '@/constants/theme';
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: Colors.gray,
            tabBarStyle: {
                backgroundColor: "black",
                borderTopWidth: 0,
                position: 'absolute',
                elevation: 0,
                height: 40,
                paddingBottom: 8,
            },
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                tabBarIcon: ({size, color}) => <Ionicons name="home" size={size}
                color={color} />,
            }}
        />
        <Tabs.Screen
            name="bookmarks"
            options={{
                title: 'Bookmarks',
                tabBarIcon: ({size, color}) => <Ionicons name="bookmark" size={size}
                color={color} />,
            }}
        />
        <Tabs.Screen
            name="create"
            options={{
                title: 'Create',
                tabBarIcon: ({size}) => <Ionicons name="add-circle" size={size} color={COLORS.primary}/>,
            }}
        />
        <Tabs.Screen
            name="notifications"
            options={{
                title: 'Notifications',
                tabBarIcon: ({color, size}) => <Ionicons name="heart" size={size} color={color}/>,
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                tabBarIcon: ({color, size}) => <Ionicons name="person-circle" size={size} color={color}/>,
            }}
        />
    </Tabs>
  )
}