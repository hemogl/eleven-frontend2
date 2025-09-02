import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EnterButton = ({ destination }: any) => {
  const navigation = useNavigation();

  const goMap = () => {
    navigation.navigate("Map");
  };

  return (
    <View>
      <TouchableOpacity onPress={goMap}>
        <Image
          style={styles.size}
          source={require("../../assets/enter.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  size: {
    width: 30,
    height: 30,
  },
});

export default EnterButton;
