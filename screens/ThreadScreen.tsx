import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { dark } from "../colorPalet";
import SubscribeButton from "../components/SubscribeButton";

export default class ThreadScreen extends Component {
  render() {
    const friends = [
      {
        name: "Mattia",
        surname: "Parisi",
        email: "mattiaparisi@gmail.com",
        OnScreen: true,
        id: 0,
        location: "Paname",
      },
      {
        name: "Alessia",
        surname: "Ciccarello",
        email: "alessiaciccarello@gmail.com",
        OnScreen: true,
        id: 1,
        location: "Bisous Club",
      },
      {
        name: "Ciccio",
        surname: "Belo",
        email: "cicciobelo@gmail.com",
        OnScreen: true,
        id: 2,
        location: "Rex Club",
      },
      {
        name: "Santo",
        surname: "Terranova",
        email: "santoterranova@gmail.com",
        OnScreen: false,
        id: 3,
        location: "Open Air Montreuil",
      },
      {
        name: "Damiano",
        surname: "Pulvirenti",
        email: "damianopulvirenti@gmail.com",
        OnScreen: true,
        id: 4,
        location: "Bisous Club",
      },
      {
        name: "Enrico",
        surname: "Bruno",
        email: "enricobruno@gmail.com",
        OnScreen: true,
        id: 5,
        location: "Wanderlust",
      },
    ];

    const friendsThreadList = [];

    friends.map((friend, key) => {
      if (friend.OnScreen) {
        friendsThreadList.push(
          <View style={styles.friendContainer}>
            <Text>
              {friend.name} is at {friend.location}{" "}
            </Text>
            <SubscribeButton text="Unsubscribe"></SubscribeButton>
          </View>
        );
      }
    });

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}> Thread Screen </Text>
          {friendsThreadList}
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
  friendContainer: {
    margin: 12,
    marginTop: 80,
    flexDirection: "row",
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
