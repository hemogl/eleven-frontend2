import React from "react";
import { StyleSheet, View, Text } from "react-native";
import EnterButton from "../components/EnterButton";
import LoginInput from "../components/LoginInput";
import Heading from "../components/Heading";
import { dark } from "../colorPalet";

function ElevenChartScreen() {
  return (
    <View style={styles.container}>
      <Heading title="Eleven ★" />
      <Text> Welcome to Eleven! </Text>
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

export default ElevenChartScreen;
