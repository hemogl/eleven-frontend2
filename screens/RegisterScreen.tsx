import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import GenericButton from "../components/Buttons/GenericButton";
import LoginInput from "../components/LoginInput";
import { dark } from "../colorPalet";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const tempPass = ({ value }) => {
    setTempPassword(value);
  };

  const definitivePass = ({ value }) => {
    if (value === tempPassword) {
      setPassword(value);
    } else {
      alert("Error. Mismatch in passwords");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 82 }}
        source={require("../assets/eleven-logo.png")}
      ></Image>
      <LoginInput
        insidePlaceholder={"name"}
        placeholder="Name"
        onChangeText={(value) => setName(value)}
      ></LoginInput>
      <LoginInput
        insidePlaceholder={"email"}
        placeholder="Email"
        onChangeText={(value) => setEmail(value)}
      ></LoginInput>
      <LoginInput
        insidePlaceholder={"password1"}
        placeholder="password"
        onChangeText={tempPass}
      ></LoginInput>
      <LoginInput
        insidePlaceholder={"password2"}
        placeholder="Email"
        onChangeText={definitivePass}
      ></LoginInput>
      <GenericButton
        title="Subscribe"
        color={dark.white}
        backgroundColor={dark.black}
      ></GenericButton>
    </View>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    margin: 12,
  },
  container: {
    backgroundColor: dark.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RegisterScreen;
