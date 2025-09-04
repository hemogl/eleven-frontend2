import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { dark } from "../../colorPalet";

const GenericButton = ({
  title,
  action,
  width,
  padding,
  backgroundColor,
  color,
}: any) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          { width: width, padding: padding, backgroundColor: backgroundColor },
        ]}
        onPress={action}
      >
        <Text style={[styles.textButton, { color: color }]}> {title} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 30,
    backgroundColor: dark.black,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
  },
  textButton: {
    color: "#fcf8f8ff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GenericButton;
