import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import MyJoinRequests from "./screens/JoinRequestsScreen";
import TabNavigator from "./navigation/TabNavigator";
import ChartScreen from "./screens/ChartScreen";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync(); // Masque le splash
      }
    };

    prepare();
  }, []);

  if (!appIsReady) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require("./assets/splash-screen.png")}
          style={styles.splashImage}
          resizeMode="cover"
        />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        id={undefined}
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Map" component={TabNavigator} />
        <Stack.Screen name="Chart" component={ChartScreen} />
        <Stack.Screen name="JoinRequests" component={MyJoinRequests} />
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
  splashContainer: {
    flex: 1,
    backgroundColor: "#000000", // même couleur que ton splash
    alignItems: "center",
    justifyContent: "center",
  },
  splashImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
