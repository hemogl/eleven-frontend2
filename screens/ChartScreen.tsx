import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Heading from "../components/Titles/Heading";
import SubHeading from "../components/Titles/SubHeading";
import { dark } from "../colorPalet";

function ChartScreen() {
  return (
    <View style={styles.container}>
      <Heading title="Eleven ★" color="#fcf8f8ff" />
      <SubHeading title="Welcome to Eleven!" color="#fcf8f8ff" />
      <Text style={{ color: dark.white, fontFamily: "Verdana", fontSize: 18 }}>
        no more post-eleven boring night-out plans! Find out what your friends
        are up to and elevate your night experience. Share your plans, location
        with your friends. They might join you or you might join them. It's
        always more fun when you're together!
      </Text>
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
    backgroundColor: dark.black,
  },
});

export default ChartScreen;
