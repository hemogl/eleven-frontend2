import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { dark } from "../colorPalet";

const SubscribeButton = ({ text }: any) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const Subscribe = () => {
    console.log("You subscribed to x's profile!");
  };
  return (
    <View style={styles.settingButton}>
      <TouchableOpacity onPress={Subscribe}>
        <Text style={styles.text}> {text} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubscribeButton;

const styles = StyleSheet.create({
  settingButton: {
    width: 130,
    height: 30,
    backgroundColor: dark.black,
    borderRadius: 7,
  },
  text: {
    color: dark.white,
    alignItems: "center",
    justifyContent: "center",
  },
  size: {
    width: 30,
    height: 30,
  },
});
