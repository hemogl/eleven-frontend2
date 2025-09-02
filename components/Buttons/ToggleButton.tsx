import React from "react";
import { View, Switch, StyleSheet } from "react-native";
import { dark } from "../../colorPalet";

const ToggleButton = ({ isOnScreen, setIsOnScreen }) => {
  const toggle = () => {
    setIsOnScreen(!isOnScreen);
  };

  return (
    <View style={styles.container}>
      <Switch
        value={isOnScreen}
        onValueChange={toggle}
        trackColor={{ false: "#767577", true: "#0eb92aff" }}
        thumbColor={isOnScreen ? "#fdfcf5ff" : "#f4f3f4"}
        ios_backgroundColor={dark.middledark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ToggleButton;
