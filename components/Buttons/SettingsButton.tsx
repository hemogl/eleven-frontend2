import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

const SettingsButton = ({ destination, navigation }: any) => {
  const goToSettings = () => {
    navigation.navigate(destination);
  };

  return (
    <View style={styles.settingButton}>
      <TouchableOpacity onPress={goToSettings}>
        <Image
          style={styles.size}
          source={require("../assets/settings.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  settingButton: {
    width: 30,
    height: 30,
  },
  size: {
    width: 30,
    height: 30,
  },
});

export default SettingsButton;
