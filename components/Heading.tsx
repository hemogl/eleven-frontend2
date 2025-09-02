import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { dark } from "../colorPalet";
import SubscribeButton from "./SubscribeButton";

const Title = ({ text, titleColor }: any) => {
  return (
    <View style={styles.heading}>
      <Text style={{ color: titleColor }}> {text} </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 2,
    paddingBottom: 5,
    paddingHorizontal: 6,
    fontFamily: "Verdana",
  },
});
