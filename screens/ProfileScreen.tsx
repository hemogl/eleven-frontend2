import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { dark } from "../colorPalet";
import SubscribeButton from "../components/Buttons/SubscribeButton";
import Avatar from "../components/Avatar";
import Heading from "../components/Titles/Heading";

export default class UserProfileView extends Component {
  render() {
    const user = {
      name: "Santi",
    };

    const Subscribe = () => {
      console.log("You subscribed to x's profile!");
    };

    return (
      <View style={styles.container}>
        <View>
          <Avatar url={require("../assets/profileImage.jpg")}></Avatar>
          <Heading title={user.name} color={dark.black}></Heading>
          <SubscribeButton
            title="Subscribe"
            action={Subscribe}
            style={{ marginTop: 10 }}
          ></SubscribeButton>
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
