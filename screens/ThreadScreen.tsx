import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { dark } from "../colorPalet";
import SubscribeButton from "../components/SubscribeButton";
import { friends } from "../utils";

export default class ThreadScreen extends Component {
  render() {
    const friendsThreadList = [];

    friends.map((friend, key) => {
      if (friend.OnScreen) {
        friendsThreadList.push(
          <View key={friend.id}>
            <View style={styles.friendContainer}>
              <Text>
                {friend.name} is at {friend.location.place}
              </Text>
              <Text>
                Rating: {friend.location.rating === 5 ? " ★ ★ ★ ★ ★" : " ★ "}
              </Text>
            </View>
            <View>
              <SubscribeButton title="Unsubscribe"></SubscribeButton>
            </View>
          </View>
        );
      }
    });

    return (
      <View style={styles.container}>
        <View>{friendsThreadList}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
