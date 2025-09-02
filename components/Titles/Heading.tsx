import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";

const Title = ({ title, color }: any) => {
  return (
    <View>
      <Text style={[styles.headingText, { color: color }]}> {title} </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  headingText: {
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 2,
    paddingBottom: 5,
    paddingHorizontal: 6,
    fontFamily: "Verdana",
    textAlign: "center",
    justifyContent: "center",
  },
});
