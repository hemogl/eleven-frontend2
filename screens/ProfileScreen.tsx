import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { dark } from "../colorPalet";
import GenericButton from "../components/Buttons/GenericButton";
import Avatar from "../components/Avatar";
import Heading from "../components/Titles/Heading";
import { useNavigation } from "@react-navigation/native";

function MyProfile() {
  const navigation = useNavigation<any>();

  const user = {
    id: 0,
    name: "Mattia",
    surname: "Parisi",
    email: "mattiaparisi@gmail.com",
    OnScreen: true,
    currentLocation: {
      place: "Paname",
      rating: 5,
    },
    numberFriends: 12,
    joinRequests: [
      {
        user: "Samanta",
      },
    ],
  };

  const LogJoinRequests = () => {
    navigation.navigate("JoinRequests");
    console.log(`You have ${user.joinRequests.length} requests!`);
  };

  const Subscribe = () => {
    console.log("You subscribed to x's profile!");
  };

  return (
    <View style={styles.container}>
      <View>
        <Avatar url={require("../assets/profileImage.jpg")}></Avatar>
        <Heading title={user.name} color={dark.black}></Heading>
        <Text> {user.numberFriends} friends </Text>
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
