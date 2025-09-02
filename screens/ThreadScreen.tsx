import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { dark } from "../colorPalet";
import SubscribeButton from "../components/Buttons/SubscribeButton";
import { friends } from "../utils";
import { ScrollView } from "react-native";
import Heading from "../components/Titles/Heading";

function ThreadScreen() {
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
    <ScrollView style={styles.container}>
      <Heading title="activity" style={{ color: dark.black }}></Heading>
      <View>{friendsThreadList}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: dark.white,
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

export default ThreadScreen;
