import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { dark } from "../colorPalet";
import GenericButton from "../components/Buttons/GenericButton";
import { friends } from "../utils";
import { ScrollView } from "react-native";
import Heading from "../components/Titles/Heading";

function ThreadScreen() {
  const friendsThreadList = [];

  const Unsubscribe = () => {
    console.log("You unsubscribed from x!");
  };

  friends.map((friend, key) => {
    if (friend.OnScreen) {
      friendsThreadList.push(
        <View key={friend.id} style={styles.friendCard}>
          <View>
            <Text>
              {friend.name} is at {friend.location.place}
            </Text>
            <Text>
              Rating: {friend.location.rating === 5 ? " ★ ★ ★ ★ ★" : " ★ "}
            </Text>
          </View>
          <View>
            <GenericButton
              title="Unsubscribe"
              action={Unsubscribe}
            ></GenericButton>
          </View>
        </View>
      );
    }
  });

  return (
    <ScrollView style={styles.ThreadContainer}>
      <Heading title="activity" style={{ color: dark.darkgrey }}></Heading>
      <View>{friendsThreadList}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ThreadContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: dark.white,
  },
  friendCard: {
    margin: 3,
    padding: 37,
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
    borderWidth: 2,
    width: "99%",
    borderColor: dark.almostgrey,
    alignSelf: "center",
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
