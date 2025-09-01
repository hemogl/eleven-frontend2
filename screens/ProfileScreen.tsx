import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { dark } from "../colorPalet";

export default class UserProfileView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}> Profile picture </Text>
          <Image />
          <Pressable>
            <Text style={styles.text}> Subscribe </Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dark.white,
  },
  text: {
    textAlign: "center",
    justifyContent: "center",
    color: dark.black,
  },
  body: {
    backgroundColor: dark.white,
    height: 500,
    alignItems: "center",
  },
});
