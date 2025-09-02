import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { dark } from "../../colorPalet";

const GenericButton = ({ title, action }: any) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={action}>
        <Text style={styles.textButton}> {title} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 30,
    backgroundColor: dark.black,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#fcf8f8ff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GenericButton;
