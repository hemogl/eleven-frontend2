import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { dark } from "../colorPalet";
import GenericButton from "../components/Buttons/GenericButton";
import { useNavigation } from "@react-navigation/native";
import LoginInput from "../components/LoginInput";
import GreyInput from "../components/GreyInput";
import SettingsList from "../components/SettingsList";

function Settings() {
  const navigation = useNavigation<any>();

  const readChart = () => {
    navigation.getParent()?.navigate("Chart");
  };

  const changePwd = () => {
    console.log("changing password");
  };

  const changeEmail = () => {
    console.log("changing password");
  };

  return (
    <View style={styles.settingsContainer}>
      <SettingsList></SettingsList>
      {/*   <GreyInput placeholder="email"></GreyInput>
      <GenericButton title="Change email" action={changeEmail}></GenericButton>
      <GreyInput placeholder="password"></GreyInput>
      <GreyInput placeholder="password"></GreyInput>
      <GenericButton title="Change password" action={changePwd}></GenericButton>
      <GenericButton title="About Eleven" action={readChart}></GenericButton>
      <GenericButton title="Log Out" action={readChart}></GenericButton> */}
    </View>
  );
}

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: dark.white,
    alignItems: "center",
  },
  text: {
    flex: 1,
    position: "absolute",
    top: 120,
    color: dark.white,
  },
  body: {
    backgroundColor: "white",
    height: 500,
    alignItems: "center",
  },
});

export default Settings;
