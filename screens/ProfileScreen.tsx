import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { dark } from "../colorPalet";
import SubscribeButton from "../components/SubscribeButton";
import Avatar from "../components/Avatar";

export default class UserProfileView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Avatar url="https://i.pinimg.com/736x/54/72/d1/5472d1b09d3d724228109d381d617326.jpg"></Avatar>
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
