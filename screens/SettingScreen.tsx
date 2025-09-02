import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { dark } from "../colorPalet";

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Eleven </Text>
        <TouchableOpacity>
          <Text style={styles.text}> Change password </Text>
        </TouchableOpacity>
        <Text style={styles.textt}> Log out </Text>
      </View>
    );
  }
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
