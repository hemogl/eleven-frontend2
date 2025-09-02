import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Map from "../components/MapComponent";
import ProfileScreen from "../screens/ProfileScreen";
import SettingScreen from "../screens/SettingScreen";
import ThreadScreen from "../screens/ThreadScreen";
import { Image, StyleSheet } from "react-native";
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Thread"
        component={ThreadScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={require("../assets/down.png")} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={require("../assets/map.png")} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={require("../assets/user.png")} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("../assets/settings.png")}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});
