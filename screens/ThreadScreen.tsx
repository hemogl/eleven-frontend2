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
        location: {
          place: "Paname",
          rating: 5,
        },
      },
      {
        name: "Alessia",
        surname: "Ciccarello",
        email: "alessiaciccarello@gmail.com",
        OnScreen: true,
        id: 1,
        location: {
          place: "Bisous Club",
          rating: 5,
        },
      },
      {
        name: "Ciccio",
        surname: "Belo",
        email: "cicciobelo@gmail.com",
        OnScreen: true,
        id: 2,
        location: {
          place: "Rex Club",
          rating: 5,
        },
      },
      {
        name: "Santo",
        surname: "Terranova",
        email: "santoterranova@gmail.com",
        OnScreen: false,
        id: 3,
        location: {
          place: "Montreuil Open Air",
          rating: 5,
        },
      },
      {
        name: "Damiano",
        surname: "Pulvirenti",
        email: "damianopulvirenti@gmail.com",
        OnScreen: true,
        id: 4,
        location: {
          place: "Pigale Country Club",
          rating: 5,
        },
      },
      {
        name: "Enrico",
        surname: "Bruno",
        email: "enricobruno@gmail.com",
        OnScreen: true,
        id: 5,
        location: {
          place: "Deux Magots",
          rating: 5,
        },
      },
    ];

    const friendsThreadList = [];

    friends.map((friend, key) => {
      if (friend.OnScreen) {
        friendsThreadList.push(
          <View>
            <View style={styles.friendContainer}>
              <Text>
                {friend.name} is at {friend.location.place}
              </Text>
              <Text>
                Rating: {friend.location.rating === 5 ? " ★ ★ ★ ★ ★" : " ★ "}
              </Text>
            </View>
            <View>
              <SubscribeButton text="Unsubscribe"></SubscribeButton>
            </View>
          </View>
        );
      }
    });

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}> Thread </Text>
          {friendsThreadList}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    paddingTop: 50,
    backgroundColor: "transparent",
  },
  friendContainer: {
    margin: 12,
    marginTop: 80,
    flexDirection: "row",
  },
  text: {
    fontFamily: "MontSerrat",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    color: dark.black,
    fontSize: 19,
    marginTop: 18,
  },
  body: {
    backgroundColor: dark.white,
    height: 500,
    alignItems: "center",
  },
});
