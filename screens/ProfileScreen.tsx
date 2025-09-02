import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { dark } from "../colorPalet";
import SubscribeButton from "../components/SubscribeButton";

export default class UserProfileView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}> Profile picture </Text>
          <Image source={require("../assets/icon.png")} />
          <Pressable>
            <Text style={styles.text}> Subscribe </Text>
          </Pressable>
          <SubscribeButton style={{ marginTop: 10 }}></SubscribeButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dark.white,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
