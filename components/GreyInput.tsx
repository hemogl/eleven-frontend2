import React from "react";
import { StyleSheet, TextInput, SafeAreaView } from "react-native";
import { dark } from "../colorPalet";

const GreyInput = ({ placeholder }: any) => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 2,
    borderColor: dark.lightgrey,
    borderWidth: 1,
    backgroundColor: dark.almostgrey,
    height: 40,
    width: 300,
    padding: 10,
  },
});

export default GreyInput;
