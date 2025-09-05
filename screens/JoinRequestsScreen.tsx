import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { dark } from "../colorPalet";
import GenericButton from "../components/Buttons/GenericButton";
import Avatar from "../components/Avatar";
import Heading from "../components/Titles/Heading";
import { FlatList } from "react-native";

function MyJoinRequests() {
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
        friendName: "Samanta",
      },
      {
        friendName: "Santiago",
      },
      {
        friendName: "Hannah",
      },
      {
        friendName: "Elise",
      },
      {
        friendName: "Yanis",
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Heading> My Join Requests </Heading>
      <FlatList
        data={user.joinRequests}
        renderItem={({ item }) => (
          <View style={styles.uniqueRequest}>
            <Text>{item.friendName}</Text>
            <GenericButton
              title="Accept join request"
              color={dark.white}
              backgroundColor={dark.black}
            ></GenericButton>
            <GenericButton
              title="Refuse join request"
              color={dark.white}
              backgroundColor={dark.black}
            ></GenericButton>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  uniqueRequest: {
    backgroundColor: dark.lightgrey,
    margin: 12,
    padding: 8,
    width: 300,
  },
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

export default MyJoinRequests;
