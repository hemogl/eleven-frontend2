import React from "react";
import { StyleSheet, TextInput, SafeAreaView } from "react-native";

const LoginInput = ({ insidePlaceholder }: any) => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={insidePlaceholder}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    height: 40,
    margin: 12,
    width: 300,
    padding: 10,
  },
});

export default LoginInput;
