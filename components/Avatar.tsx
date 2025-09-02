import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { dark } from "../colorPalet";

const Avatar = ({ url }: any) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={url} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    margin: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
  },
});

export default Avatar;
