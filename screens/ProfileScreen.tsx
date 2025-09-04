import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { dark } from "../colorPalet";
import GenericButton from "../components/Buttons/GenericButton";
import Avatar from "../components/Avatar";
import Heading from "../components/Titles/Heading";

function MyProfile() {
  const user = {
    name: "Mattia",
    surname: "Parisi",
    email: "mattiaparisi@gmail.com",
    OnScreen: true,
    id: 0,
    currentLocation: {
      place: "Paname",
      rating: 5,
    },
    friends: 12,
  };

  const LogJoinRequests = () => {
    console.log("You have 3 join requests!");
  };

  const Subscribe = () => {
    console.log("You subscribed to x's profile!");
  };

  return (
    <View style={styles.container}>
      <View>
        <Avatar url={require("../assets/profileImage.jpg")}></Avatar>
        <Heading title={user.name} color={dark.black}></Heading>
        <Text> {user.friends} friends </Text>
        <GenericButton
          color={dark.white}
          backgroundColor={dark.black}
          title="Subscribe"
          action={Subscribe}
          style={{ marginTop: 10 }}
        ></GenericButton>
        <GenericButton
          title="Join Requests"
          color={dark.white}
          backgroundColor={dark.pink}
          action={LogJoinRequests}
        ></GenericButton>
      </View>
    </View>
  );
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

export default MyProfile;
