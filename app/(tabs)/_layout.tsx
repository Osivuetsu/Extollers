

import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import '../globals.css';

export default function TabLayout() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("black");
    NavigationBar.setButtonStyleAsync("light"); 
     NavigationBar.setBehaviorAsync("overlay-swipe");
    NavigationBar.setVisibilityAsync("visible");// white buttons/icons on Android nav bar
  }, []);

  return (
    <>

      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#000", // Black navbar
            borderTopColor: "#222", // Subtle top border
            height: 70,
            paddingBottom: 10,
            paddingTop: 5,
          },
          tabBarActiveTintColor: "#FFA500", // Orange highlight
          
          tabBarInactiveTintColor: "#888", // Grey for inactive
          tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: any;
                
                if (route.name === "home") {
                    iconName = focused ? "home" : "home-outline";
                } else if (route.name === "explore") {
                    iconName = focused ? "compass" : "compass-outline";
                } else if (route.name === "profile") {
                    iconName = focused ? "person" : "person-outline";
                } else if (route.name ==="practice") {
                    iconName = focused ? "play" : "play-outline"
                }
                
                return <Ionicons name={iconName} size={24} color={color} />;
            },
        })}
        >
        <Tabs.Screen name="home" options={{ title: "Home" }} />
        <Tabs.Screen name="explore" options={{ title: "Explore" }} />
        <Tabs.Screen name = "practice" options={{title:"Practice"}}/>
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
          </>
    
  );
}
