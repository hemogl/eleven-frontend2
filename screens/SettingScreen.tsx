import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { dark } from "../colorPalet";
import SubscribeButton from "../components/Buttons/SubscribeButton";
import { useNavigation } from "@react-navigation/native";

function Settings() {
  const navigation = useNavigation<any>();

  const readChart = () => {
    navigation.getParent()?.navigate("Chart");
  };

  return (
    <View style={styles.container}>
      <Text> Eleven </Text>
      <TouchableOpacity>
        <Text style={styles.text}> Change password </Text>
      </TouchableOpacity>
      <Text style={styles.textt}> Log out </Text>
      <SubscribeButton
        title="About Eleven"
        action={readChart}
      ></SubscribeButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dark.black,
  },
  text: {
    flex: 1,
    position: "absolute",
    top: 120,
    color: dark.white,
  },
  textt: {
    flex: 1,
    position: "absolute",
    top: 170,
    color: dark.white,
  },
  body: {
    backgroundColor: "white",
    height: 500,
    alignItems: "center",
  },
});

export default Settings;
