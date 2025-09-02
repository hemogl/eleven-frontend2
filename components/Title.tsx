import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { dark } from "../colorPalet";
import SubscribeButton from "../components/SubscribeButton";

const Title = ({ text }: any) => {
  return (
    <View>
      <Text> {text} </Text>
    </View>
  );
};

export default Title;
