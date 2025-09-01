import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import EnterButton from "../components/EnterButton";
import LoginInput from "../components/LoginInput";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}> eleven </Text>
      <LoginInput insidePlaceholder={"email"}></LoginInput>
      <LoginInput insidePlaceholder={"password"}></LoginInput>
      <EnterButton destination={"MainApp"}></EnterButton>
    </View>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    margin: 12,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
