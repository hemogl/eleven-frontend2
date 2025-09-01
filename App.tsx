import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SettingsButton from "./components/SettingsButton";
import LoginInput from "./components/LoginInput";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import MapScreen from "./screens/MapScreen";
import TabNavigator from "./navigation/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        id={undefined}
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Map" component={TabNavigator} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
