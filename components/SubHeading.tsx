import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { dark } from "../colorPalet";
import SubscribeButton from "../components/SubscribeButton";

function SubHeading({ text }: any) {
  return (
    <View style={styles.subHeading}>
      <Text> {text} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subHeading: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 2,
    paddingBottom: 5,
    paddingHorizontal: 6,
    fontFamily: "Verdana",
  },
});

export default SubHeading;
