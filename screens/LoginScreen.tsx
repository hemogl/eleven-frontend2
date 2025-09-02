import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import EnterButton from "../components/Buttons/EnterButton";
import LoginInput from "../components/LoginInput";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onEmailChanged = (email) => {
    setEmail(() => email);
  };

  const onPasswordChanged = (password) => {
    setPassword(() => password);
  };

  const login = async () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}> eleven </Text>
      <LoginInput
        insidePlaceholder={"email"}
        placeholder="Email"
        onChangeText={onEmailChanged}
      ></LoginInput>
      <LoginInput
        insidePlaceholder={"password"}
        placeholder="password"
        onChangeText={onEmailChanged}
      ></LoginInput>
      <EnterButton onPress={login} destination={"MainApp"}></EnterButton>
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
