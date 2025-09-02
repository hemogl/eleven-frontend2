import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { dark } from "../colorPalet";
import SubscribeButton from "../components/SubscribeButton";

const Avatar = ({ url }) => {
  <View>
    <Image source={require(url)} style={styles.avatar} />;
  </View>;
};
export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 40,
  },
});
